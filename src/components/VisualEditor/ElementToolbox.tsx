import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Type, 
  Image, 
  MousePointer, 
  Layout, 
  MessageSquare, 
  Star,
  Briefcase,
  Users,
  Phone,
  Globe,
  Grid3X3,
  Video,
  BarChart3
} from 'lucide-react';

interface ElementToolboxProps {
  onAddElement: (type: string) => void;
}

export const ElementToolbox: React.FC<ElementToolboxProps> = ({ onAddElement }) => {
  const elementTypes = [
    {
      category: 'Basic Elements',
      elements: [
        { type: 'heading', label: 'Heading', icon: Type, description: 'Add a heading' },
        { type: 'paragraph', label: 'Paragraph', icon: Type, description: 'Add text content' },
        { type: 'image', label: 'Image', icon: Image, description: 'Add an image' },
        { type: 'button', label: 'Button', icon: MousePointer, description: 'Add a button' },
        { type: 'spacer', label: 'Spacer', icon: Layout, description: 'Add spacing' }
      ]
    },
    {
      category: 'Layout Elements',
      elements: [
        { type: 'hero', label: 'Hero Section', icon: Layout, description: 'Large header section' },
        { type: 'columns', label: 'Columns', icon: Grid3X3, description: 'Multi-column layout' },
        { type: 'container', label: 'Container', icon: Layout, description: 'Content container' }
      ]
    },
    {
      category: 'Content Blocks',
      elements: [
        { type: 'services', label: 'Services', icon: Briefcase, description: 'Services showcase' },
        { type: 'success-stories', label: 'Success Stories', icon: Star, description: 'Client testimonials' },
        { type: 'team', label: 'Team', icon: Users, description: 'Team members' },
        { type: 'blog-posts', label: 'Blog Posts', icon: Globe, description: 'Latest blog posts' }
      ]
    },
    {
      category: 'Interactive Elements',
      elements: [
        { type: 'contact-form', label: 'Contact Form', icon: MessageSquare, description: 'Contact form' },
        { type: 'newsletter', label: 'Newsletter', icon: MessageSquare, description: 'Newsletter signup' },
        { type: 'video', label: 'Video', icon: Video, description: 'Embed video' },
        { type: 'map', label: 'Map', icon: Globe, description: 'Google Maps' }
      ]
    },
    {
      category: 'Advanced',
      elements: [
        { type: 'chart', label: 'Chart', icon: BarChart3, description: 'Data visualization' },
        { type: 'timeline', label: 'Timeline', icon: BarChart3, description: 'Timeline display' },
        { type: 'pricing', label: 'Pricing Table', icon: BarChart3, description: 'Pricing comparison' }
      ]
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {elementTypes.map((category) => (
        <div key={category.category}>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">{category.category}</h3>
          <div className="grid grid-cols-1 gap-2">
            {category.elements.map((element) => {
              const IconComponent = element.icon;
              return (
                <Button
                  key={element.type}
                  variant="outline"
                  className="h-auto p-3 flex items-start justify-start text-left"
                  onClick={() => onAddElement(element.type)}
                >
                  <IconComponent className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{element.label}</div>
                    <div className="text-xs text-gray-500 truncate">{element.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};