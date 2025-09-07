import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Palette, Move } from 'lucide-react';
import { PageElement } from './PageBuilder';

interface ElementPropertiesProps {
  element?: PageElement;
  onUpdate: (updates: Partial<PageElement>) => void;
}

export const ElementProperties: React.FC<ElementPropertiesProps> = ({
  element,
  onUpdate
}) => {
  if (!element) {
    return (
      <div className="p-4 text-center text-gray-500">
        <Settings className="h-8 w-8 mx-auto mb-2 text-gray-400" />
        <p className="text-sm">Select an element to edit properties</p>
      </div>
    );
  }

  const updateContent = (key: string, value: any) => {
    onUpdate({
      content: {
        ...element.content,
        [key]: value
      }
    });
  };

  const updateStyles = (key: string, value: any) => {
    onUpdate({
      styles: {
        ...element.styles,
        [key]: value
      }
    });
  };

  const renderContentProperties = () => {
    switch (element.type) {
      case 'heading':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Heading Text</Label>
              <Input
                id="text"
                value={element.content.text || ''}
                onChange={(e) => updateContent('text', e.target.value)}
                placeholder="Enter heading text"
              />
            </div>
            <div>
              <Label htmlFor="level">Heading Level</Label>
              <Select
                value={element.content.level?.toString() || '1'}
                onValueChange={(value) => updateContent('level', parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">H1</SelectItem>
                  <SelectItem value="2">H2</SelectItem>
                  <SelectItem value="3">H3</SelectItem>
                  <SelectItem value="4">H4</SelectItem>
                  <SelectItem value="5">H5</SelectItem>
                  <SelectItem value="6">H6</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 'paragraph':
        return (
          <div>
            <Label htmlFor="text">Text Content</Label>
            <Textarea
              id="text"
              value={element.content.text || ''}
              onChange={(e) => updateContent('text', e.target.value)}
              placeholder="Enter paragraph text"
              rows={4}
            />
          </div>
        );

      case 'image':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="src">Image URL</Label>
              <Input
                id="src"
                value={element.content.src || ''}
                onChange={(e) => updateContent('src', e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <Label htmlFor="alt">Alt Text</Label>
              <Input
                id="alt"
                value={element.content.alt || ''}
                onChange={(e) => updateContent('alt', e.target.value)}
                placeholder="Image description"
              />
            </div>
            <div>
              <Label htmlFor="caption">Caption (optional)</Label>
              <Input
                id="caption"
                value={element.content.caption || ''}
                onChange={(e) => updateContent('caption', e.target.value)}
                placeholder="Image caption"
              />
            </div>
          </div>
        );

      case 'button':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Button Text</Label>
              <Input
                id="text"
                value={element.content.text || ''}
                onChange={(e) => updateContent('text', e.target.value)}
                placeholder="Click Here"
              />
            </div>
            <div>
              <Label htmlFor="url">Link URL</Label>
              <Input
                id="url"
                value={element.content.url || ''}
                onChange={(e) => updateContent('url', e.target.value)}
                placeholder="https://example.com"
              />
            </div>
            <div>
              <Label htmlFor="variant">Button Style</Label>
              <Select
                value={element.content.variant || 'primary'}
                onValueChange={(value) => updateContent('variant', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primary</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                  <SelectItem value="ghost">Ghost</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="newTab"
                checked={element.content.openInNewTab || false}
                onCheckedChange={(checked) => updateContent('openInNewTab', checked)}
              />
              <Label htmlFor="newTab">Open in new tab</Label>
            </div>
          </div>
        );

      case 'hero':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="heading">Main Heading</Label>
              <Input
                id="heading"
                value={element.content.heading || ''}
                onChange={(e) => updateContent('heading', e.target.value)}
                placeholder="Hero Heading"
              />
            </div>
            <div>
              <Label htmlFor="subheading">Subheading</Label>
              <Textarea
                id="subheading"
                value={element.content.subheading || ''}
                onChange={(e) => updateContent('subheading', e.target.value)}
                placeholder="Hero subheading"
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="backgroundImage">Background Image URL</Label>
              <Input
                id="backgroundImage"
                value={element.content.backgroundImage || ''}
                onChange={(e) => updateContent('backgroundImage', e.target.value)}
                placeholder="https://example.com/hero-bg.jpg"
              />
            </div>
            <div>
              <Label htmlFor="ctaText">CTA Button Text</Label>
              <Input
                id="ctaText"
                value={element.content.ctaText || ''}
                onChange={(e) => updateContent('ctaText', e.target.value)}
                placeholder="Get Started"
              />
            </div>
            <div>
              <Label htmlFor="ctaUrl">CTA Button URL</Label>
              <Input
                id="ctaUrl"
                value={element.content.ctaUrl || ''}
                onChange={(e) => updateContent('ctaUrl', e.target.value)}
                placeholder="#contact"
              />
            </div>
          </div>
        );

      case 'contact-form':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Form Title</Label>
              <Input
                id="title"
                value={element.content.title || ''}
                onChange={(e) => updateContent('title', e.target.value)}
                placeholder="Contact Us"
              />
            </div>
            <div>
              <Label>Form Fields</Label>
              <div className="space-y-2 mt-2">
                {['name', 'email', 'phone', 'company', 'message'].map((field) => (
                  <div key={field} className="flex items-center space-x-2">
                    <Switch
                      checked={element.content.fields?.includes(field) || false}
                      onCheckedChange={(checked) => {
                        const currentFields = element.content.fields || ['name', 'email', 'message'];
                        const newFields = checked
                          ? [...currentFields, field]
                          : currentFields.filter((f: string) => f !== field);
                        updateContent('fields', newFields);
                      }}
                    />
                    <Label className="capitalize">{field}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <Label>No specific properties for this element type</Label>
          </div>
        );
    }
  };

  const renderStyleProperties = () => {
    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="textAlign">Text Alignment</Label>
          <Select
            value={element.styles?.textAlign || 'left'}
            onValueChange={(value) => updateStyles('textAlign', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="right">Right</SelectItem>
              <SelectItem value="justify">Justify</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="fontSize">Font Size</Label>
          <Select
            value={element.styles?.fontSize || 'base'}
            onValueChange={(value) => updateStyles('fontSize', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="xs">Extra Small</SelectItem>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="base">Base</SelectItem>
              <SelectItem value="lg">Large</SelectItem>
              <SelectItem value="xl">Extra Large</SelectItem>
              <SelectItem value="2xl">2X Large</SelectItem>
              <SelectItem value="3xl">3X Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="fontWeight">Font Weight</Label>
          <Select
            value={element.styles?.fontWeight || 'normal'}
            onValueChange={(value) => updateStyles('fontWeight', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="semibold">Semibold</SelectItem>
              <SelectItem value="bold">Bold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="textColor">Text Color</Label>
          <Input
            id="textColor"
            type="color"
            value={element.styles?.textColor || '#000000'}
            onChange={(e) => updateStyles('textColor', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="backgroundColor">Background Color</Label>
          <Input
            id="backgroundColor"
            type="color"
            value={element.styles?.backgroundColor || '#ffffff'}
            onChange={(e) => updateStyles('backgroundColor', e.target.value)}
          />
        </div>
      </div>
    );
  };

  const renderSpacingProperties = () => {
    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="marginTop">Margin Top</Label>
          <Select
            value={element.styles?.marginTop || '0'}
            onValueChange={(value) => updateStyles('marginTop', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">None</SelectItem>
              <SelectItem value="1">Small</SelectItem>
              <SelectItem value="2">Medium</SelectItem>
              <SelectItem value="4">Large</SelectItem>
              <SelectItem value="8">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="marginBottom">Margin Bottom</Label>
          <Select
            value={element.styles?.marginBottom || '0'}
            onValueChange={(value) => updateStyles('marginBottom', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">None</SelectItem>
              <SelectItem value="1">Small</SelectItem>
              <SelectItem value="2">Medium</SelectItem>
              <SelectItem value="4">Large</SelectItem>
              <SelectItem value="8">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="padding">Padding</Label>
          <Select
            value={element.styles?.padding || '0'}
            onValueChange={(value) => updateStyles('padding', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">None</SelectItem>
              <SelectItem value="2">Small</SelectItem>
              <SelectItem value="4">Medium</SelectItem>
              <SelectItem value="6">Large</SelectItem>
              <SelectItem value="8">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Element Properties</CardTitle>
        <p className="text-sm text-gray-600 capitalize">
          {element.type.replace('-', ' ')} Element
        </p>
      </CardHeader>

      <CardContent className="flex-1 overflow-auto">
        <Tabs defaultValue="content" className="h-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="content" className="text-xs">
              <Settings className="h-3 w-3 mr-1" />
              Content
            </TabsTrigger>
            <TabsTrigger value="style" className="text-xs">
              <Palette className="h-3 w-3 mr-1" />
              Style
            </TabsTrigger>
            <TabsTrigger value="spacing" className="text-xs">
              <Move className="h-3 w-3 mr-1" />
              Layout
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4">
            {renderContentProperties()}
          </TabsContent>

          <TabsContent value="style" className="space-y-4">
            {renderStyleProperties()}
          </TabsContent>

          <TabsContent value="spacing" className="space-y-4">
            {renderSpacingProperties()}
          </TabsContent>
        </Tabs>
      </CardContent>
    </div>
  );
};