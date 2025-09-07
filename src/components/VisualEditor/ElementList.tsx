import React from 'react';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { 
  GripVertical, 
  Eye, 
  EyeOff, 
  Copy, 
  Trash2,
  Type,
  Image,
  MousePointer,
  Layout,
  MessageSquare,
  Star,
  Briefcase
} from 'lucide-react';
import { PageElement } from './PageBuilder';

interface ElementListProps {
  elements: PageElement[];
  selectedElement: string | null;
  onSelectElement: (id: string) => void;
  onDeleteElement: (id: string) => void;
  onDuplicateElement: (id: string) => void;
}

interface SortableElementProps {
  element: PageElement;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

const SortableElement: React.FC<SortableElementProps> = ({
  element,
  isSelected,
  onSelect,
  onDelete,
  onDuplicate
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: element.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getElementIcon = (type: string) => {
    switch (type) {
      case 'heading':
      case 'paragraph':
        return Type;
      case 'image':
        return Image;
      case 'button':
        return MousePointer;
      case 'hero':
      case 'container':
        return Layout;
      case 'contact-form':
      case 'newsletter':
        return MessageSquare;
      case 'success-stories':
        return Star;
      case 'services':
        return Briefcase;
      default:
        return Layout;
    }
  };

  const getElementLabel = (element: PageElement) => {
    if (element.content.text) {
      return element.content.text.substring(0, 30) + (element.content.text.length > 30 ? '...' : '');
    }
    if (element.content.heading) {
      return element.content.heading.substring(0, 30) + (element.content.heading.length > 30 ? '...' : '');
    }
    return element.type.charAt(0).toUpperCase() + element.type.slice(1);
  };

  const IconComponent = getElementIcon(element.type);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group relative border rounded-lg p-3 cursor-pointer transition-all ${
        isSelected 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-200 hover:border-gray-300 bg-white'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center space-x-2">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-1 hover:bg-gray-100 rounded"
        >
          <GripVertical className="h-3 w-3 text-gray-400" />
        </div>
        
        <IconComponent className="h-4 w-4 text-gray-600" />
        
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-900 truncate">
            {getElementLabel(element)}
          </div>
          <div className="text-xs text-gray-500 capitalize">{element.type}</div>
        </div>

        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0"
            onClick={(e) => {
              e.stopPropagation();
              onDuplicate();
            }}
          >
            <Copy className="h-3 w-3" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0 text-red-600 hover:text-red-700"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ElementList: React.FC<ElementListProps> = ({
  elements,
  selectedElement,
  onSelectElement,
  onDeleteElement,
  onDuplicateElement
}) => {
  if (elements.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        <Layout className="h-8 w-8 mx-auto mb-2 text-gray-400" />
        <p className="text-sm">No elements added yet</p>
        <p className="text-xs">Add elements from the Elements tab</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-2">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Page Elements</h3>
      {elements.map((element) => (
        <SortableElement
          key={element.id}
          element={element}
          isSelected={selectedElement === element.id}
          onSelect={() => onSelectElement(element.id)}
          onDelete={() => onDeleteElement(element.id)}
          onDuplicate={() => onDuplicateElement(element.id)}
        />
      ))}
    </div>
  );
};