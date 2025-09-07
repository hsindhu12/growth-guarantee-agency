import React from 'react';
import { PageElement } from './PageBuilder';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';
import NewsletterSignup from '@/components/NewsletterSignup';

interface PreviewPanelProps {
  elements: PageElement[];
  isPreview: boolean;
  onSelectElement?: (id: string) => void;
  selectedElement?: string | null;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({
  elements,
  isPreview,
  onSelectElement,
  selectedElement
}) => {
  const getElementStyles = (element: PageElement) => {
    const styles = element.styles || {};
    
    return {
      textAlign: styles.textAlign || 'left',
      fontSize: styles.fontSize ? `var(--font-size-${styles.fontSize})` : undefined,
      fontWeight: styles.fontWeight || 'normal',
      color: styles.textColor || undefined,
      backgroundColor: styles.backgroundColor || undefined,
      marginTop: styles.marginTop ? `${styles.marginTop * 0.25}rem` : undefined,
      marginBottom: styles.marginBottom ? `${styles.marginBottom * 0.25}rem` : undefined,
      padding: styles.padding ? `${styles.padding * 0.25}rem` : undefined,
    };
  };

  const renderElement = (element: PageElement) => {
    const isSelected = selectedElement === element.id;
    const styles = getElementStyles(element);
    
    const elementClass = `
      ${!isPreview ? 'cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all' : ''}
      ${isSelected ? 'ring-2 ring-blue-500' : ''}
      ${element.type === 'spacer' ? 'min-h-[20px] bg-gray-100 border-2 border-dashed border-gray-300' : ''}
    `;

    const handleClick = (e: React.MouseEvent) => {
      if (!isPreview && onSelectElement) {
        e.stopPropagation();
        onSelectElement(element.id);
      }
    };

    const content = (() => {
      switch (element.type) {
        case 'heading':
          const HeadingTag = `h${element.content.level || 1}` as keyof JSX.IntrinsicElements;
          return (
            <HeadingTag 
              className={`font-bold ${
                element.content.level === 1 ? 'text-4xl' :
                element.content.level === 2 ? 'text-3xl' :
                element.content.level === 3 ? 'text-2xl' :
                element.content.level === 4 ? 'text-xl' :
                element.content.level === 5 ? 'text-lg' :
                'text-base'
              }`}
              style={styles}
            >
              {element.content.text || 'Heading'}
            </HeadingTag>
          );

        case 'paragraph':
          return (
            <p style={styles} className="leading-relaxed">
              {element.content.text || 'Your paragraph text goes here.'}
            </p>
          );

        case 'image':
          return (
            <div style={styles}>
              {element.content.src ? (
                <img
                  src={element.content.src}
                  alt={element.content.alt || ''}
                  className="max-w-full h-auto rounded-lg"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">No image selected</span>
                </div>
              )}
              {element.content.caption && (
                <p className="text-sm text-gray-600 mt-2 italic">
                  {element.content.caption}
                </p>
              )}
            </div>
          );

        case 'button':
          const buttonVariant = element.content.variant || 'primary';
          return (
            <div style={styles}>
              <Button
                variant={buttonVariant === 'primary' ? 'default' : buttonVariant as any}
                onClick={isPreview ? () => {
                  if (element.content.url) {
                    if (element.content.openInNewTab) {
                      window.open(element.content.url, '_blank');
                    } else {
                      window.location.href = element.content.url;
                    }
                  }
                } : undefined}
              >
                {element.content.text || 'Button'}
              </Button>
            </div>
          );

        case 'hero':
          return (
            <div 
              className="relative py-20 px-6 text-center rounded-lg overflow-hidden"
              style={{
                ...styles,
                backgroundImage: element.content.backgroundImage ? 
                  `url(${element.content.backgroundImage})` : 
                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: element.content.backgroundImage ? 'white' : styles.color || 'white'
              }}
            >
              <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-4">
                  {element.content.heading || 'Hero Heading'}
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  {element.content.subheading || 'Hero subheading goes here'}
                </p>
                {element.content.ctaText && (
                  <Button 
                    size="lg"
                    onClick={isPreview ? () => {
                      if (element.content.ctaUrl) {
                        window.location.href = element.content.ctaUrl;
                      }
                    } : undefined}
                  >
                    {element.content.ctaText}
                  </Button>
                )}
              </div>
              {element.content.backgroundImage && (
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              )}
            </div>
          );

        case 'contact-form':
          return (
            <div style={styles}>
              <Card>
                <CardHeader>
                  <CardTitle>{element.content.title || 'Contact Us'}</CardTitle>
                </CardHeader>
                <CardContent>
                  {isPreview ? (
                    <ContactForm />
                  ) : (
                    <div className="space-y-4">
                      <div className="text-sm text-gray-600">
                        Contact form will be displayed here
                      </div>
                      <div className="space-y-2">
                        {(element.content.fields || ['name', 'email', 'message']).map((field: string) => (
                          <div key={field} className="p-2 bg-gray-50 rounded border">
                            <span className="text-sm capitalize">{field} field</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          );

        case 'services':
          return (
            <div style={styles}>
              <Card>
                <CardHeader>
                  <CardTitle>{element.content.title || 'Our Services'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Digital Marketing', 'SEO Services', 'Web Development'].map((service, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">{service}</h3>
                        <p className="text-sm text-gray-600">
                          Professional {service.toLowerCase()} services
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          );

        case 'success-stories':
          return (
            <div style={styles}>
              <Card>
                <CardHeader>
                  <CardTitle>{element.content.title || 'Success Stories'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['TechCorp Inc.', 'E-commerce Store'].map((client, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">{client}</h3>
                        <Badge className="mb-2">Featured</Badge>
                        <p className="text-sm text-gray-600">
                          Increased online presence by 300%
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          );

        case 'newsletter':
          return (
            <div style={styles}>
              {isPreview ? (
                <NewsletterSignup />
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Newsletter Signup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-600">
                      Newsletter signup form will be displayed here
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          );

        case 'spacer':
          return (
            <div 
              className="w-full bg-transparent"
              style={{ 
                height: element.content.height || '40px',
                ...styles 
              }}
            >
              {!isPreview && (
                <div className="flex items-center justify-center h-full text-xs text-gray-400">
                  Spacer
                </div>
              )}
            </div>
          );

        default:
          return (
            <div style={styles} className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 text-center">
                {element.type.charAt(0).toUpperCase() + element.type.slice(1)} Element
              </p>
            </div>
          );
      }
    })();

    return (
      <div
        key={element.id}
        className={elementClass}
        onClick={handleClick}
        style={{ minHeight: element.type === 'spacer' ? element.content.height || '40px' : 'auto' }}
      >
        {content}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {elements.length === 0 ? (
        <div className="flex items-center justify-center h-96 text-gray-500">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Your page is empty</h3>
            <p className="text-sm">Add elements from the sidebar to get started</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4 p-6">
          {elements.map(renderElement)}
        </div>
      )}
    </div>
  );
};