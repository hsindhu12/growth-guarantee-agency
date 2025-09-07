import React, { useState, useCallback } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ElementToolbox } from './ElementToolbox';
import { ElementList } from './ElementList';
import { ElementProperties } from './ElementProperties';
import { PreviewPanel } from './PreviewPanel';
import { SaveIcon, Eye, Smartphone, Tablet, Monitor, Undo, Redo } from 'lucide-react';
import { toast } from 'sonner';

export interface PageElement {
  id: string;
  type: string;
  content: Record<string, any>;
  styles?: Record<string, any>;
}

export interface PageData {
  id?: number;
  title: string;
  slug: string;
  content: string;
  meta_title?: string;
  meta_description?: string;
  featured_image?: string;
  status: 'draft' | 'published' | 'archived';
  template: string;
}

interface PageBuilderProps {
  initialData?: PageData;
  onSave: (data: PageData) => Promise<void>;
  onPreview?: () => void;
}

export const PageBuilder: React.FC<PageBuilderProps> = ({
  initialData,
  onSave,
  onPreview
}) => {
  const [elements, setElements] = useState<PageElement[]>(() => {
    if (initialData?.content) {
      try {
        const parsed = JSON.parse(initialData.content);
        return parsed.elements || [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isPreview, setIsPreview] = useState(false);
  const [pageSettings, setPageSettings] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    meta_title: initialData?.meta_title || '',
    meta_description: initialData?.meta_description || '',
    featured_image: initialData?.featured_image || '',
    status: initialData?.status || 'draft' as const,
    template: initialData?.template || 'default'
  });

  const [history, setHistory] = useState<PageElement[][]>([elements]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addToHistory = useCallback((newElements: PageElement[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newElements);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setElements(history[historyIndex - 1]);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setElements(history[historyIndex + 1]);
    }
  }, [history, historyIndex]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = elements.findIndex(item => item.id === active.id);
      const newIndex = elements.findIndex(item => item.id === over.id);
      
      const newElements = arrayMove(elements, oldIndex, newIndex);
      setElements(newElements);
      addToHistory(newElements);
    }
  };

  const addElement = (type: string) => {
    const newElement: PageElement = {
      id: `element_${Date.now()}`,
      type,
      content: getDefaultContent(type),
      styles: {}
    };
    
    const newElements = [...elements, newElement];
    setElements(newElements);
    addToHistory(newElements);
    setSelectedElement(newElement.id);
    toast.success(`${type} element added`);
  };

  const updateElement = (id: string, updates: Partial<PageElement>) => {
    const newElements = elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    );
    setElements(newElements);
    addToHistory(newElements);
  };

  const deleteElement = (id: string) => {
    const newElements = elements.filter(el => el.id !== id);
    setElements(newElements);
    addToHistory(newElements);
    setSelectedElement(null);
    toast.success('Element deleted');
  };

  const duplicateElement = (id: string) => {
    const element = elements.find(el => el.id === id);
    if (element) {
      const newElement = {
        ...element,
        id: `element_${Date.now()}`
      };
      const index = elements.findIndex(el => el.id === id);
      const newElements = [
        ...elements.slice(0, index + 1),
        newElement,
        ...elements.slice(index + 1)
      ];
      setElements(newElements);
      addToHistory(newElements);
      toast.success('Element duplicated');
    }
  };

  const handleSave = async () => {
    const pageData: PageData = {
      ...pageSettings,
      content: JSON.stringify({ elements })
    };

    try {
      await onSave(pageData);
      toast.success('Page saved successfully!');
    } catch (error) {
      toast.error('Failed to save page');
      console.error('Save error:', error);
    }
  };

  const getDefaultContent = (type: string): Record<string, any> => {
    switch (type) {
      case 'heading':
        return { text: 'Your Heading Here', level: 1 };
      case 'paragraph':
        return { text: 'Your paragraph text goes here.' };
      case 'image':
        return { src: '', alt: '', caption: '' };
      case 'button':
        return { text: 'Click Here', url: '#', variant: 'primary' };
      case 'hero':
        return { 
          heading: 'Hero Heading', 
          subheading: 'Hero subheading',
          backgroundImage: '',
          ctaText: 'Get Started',
          ctaUrl: '#'
        };
      case 'contact-form':
        return { title: 'Contact Us', fields: ['name', 'email', 'message'] };
      case 'services':
        return { title: 'Our Services', showAll: true };
      case 'success-stories':
        return { title: 'Success Stories', limit: 3 };
      default:
        return {};
    }
  };

  const getViewportClass = () => {
    switch (viewMode) {
      case 'mobile':
        return 'max-w-sm';
      case 'tablet':
        return 'max-w-2xl';
      default:
        return 'max-w-full';
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Toolbar */}
      <div className="bg-white border-b px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Page Builder</h1>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={undo}
              disabled={historyIndex <= 0}
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={redo}
              disabled={historyIndex >= history.length - 1}
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Viewport Controls */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <Button
              variant={viewMode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('desktop')}
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'tablet' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('tablet')}
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('mobile')}
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="outline"
            onClick={() => setIsPreview(!isPreview)}
          >
            <Eye className="h-4 w-4 mr-2" />
            {isPreview ? 'Edit' : 'Preview'}
          </Button>

          <Button onClick={handleSave}>
            <SaveIcon className="h-4 w-4 mr-2" />
            Save Page
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {!isPreview && (
          <>
            {/* Left Sidebar - Elements & Properties */}
            <div className="w-80 bg-white border-r flex flex-col">
              <Tabs defaultValue="elements" className="flex-1 flex flex-col">
                <TabsList className="grid w-full grid-cols-3 m-2">
                  <TabsTrigger value="elements">Elements</TabsTrigger>
                  <TabsTrigger value="layers">Layers</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="elements" className="flex-1 overflow-auto">
                  <ElementToolbox onAddElement={addElement} />
                </TabsContent>

                <TabsContent value="layers" className="flex-1 overflow-auto">
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext
                      items={elements.map(el => el.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <ElementList
                        elements={elements}
                        selectedElement={selectedElement}
                        onSelectElement={setSelectedElement}
                        onDeleteElement={deleteElement}
                        onDuplicateElement={duplicateElement}
                      />
                    </SortableContext>
                  </DndContext>
                </TabsContent>

                <TabsContent value="settings" className="flex-1 overflow-auto p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Page Title</label>
                      <input
                        type="text"
                        value={pageSettings.title}
                        onChange={(e) => setPageSettings({
                          ...pageSettings,
                          title: e.target.value
                        })}
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Slug</label>
                      <input
                        type="text"
                        value={pageSettings.slug}
                        onChange={(e) => setPageSettings({
                          ...pageSettings,
                          slug: e.target.value
                        })}
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Meta Title</label>
                      <input
                        type="text"
                        value={pageSettings.meta_title}
                        onChange={(e) => setPageSettings({
                          ...pageSettings,
                          meta_title: e.target.value
                        })}
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Meta Description</label>
                      <textarea
                        value={pageSettings.meta_description}
                        onChange={(e) => setPageSettings({
                          ...pageSettings,
                          meta_description: e.target.value
                        })}
                        className="w-full px-3 py-2 border rounded-md"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Status</label>
                      <select
                        value={pageSettings.status}
                        onChange={(e) => setPageSettings({
                          ...pageSettings,
                          status: e.target.value as 'draft' | 'published' | 'archived'
                        })}
                        className="w-full px-3 py-2 border rounded-md"
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar - Element Properties */}
            {selectedElement && (
              <div className="w-80 bg-white border-l">
                <ElementProperties
                  element={elements.find(el => el.id === selectedElement)}
                  onUpdate={(updates) => updateElement(selectedElement, updates)}
                />
              </div>
            )}
          </>
        )}

        {/* Center - Canvas */}
        <div className="flex-1 flex flex-col bg-gray-100 overflow-auto">
          <div className="flex-1 p-6 flex justify-center">
            <div className={`bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 ${getViewportClass()}`}>
              <PreviewPanel
                elements={elements}
                isPreview={isPreview}
                onSelectElement={!isPreview ? setSelectedElement : undefined}
                selectedElement={selectedElement}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};