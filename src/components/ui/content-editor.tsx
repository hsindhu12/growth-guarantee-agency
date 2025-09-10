import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useUpdateSiteSetting } from "@/hooks/useSiteSettings";
import { toast } from "sonner";
import { Save, Edit3, Type, Image, Settings } from "lucide-react";

interface ContentSection {
  key: string;
  title: string;
  description: string;
  type: 'text' | 'textarea' | 'json';
  defaultValue?: any;
}

interface ContentEditorProps {
  sections: ContentSection[];
  title: string;
}

export const ContentEditor: React.FC<ContentEditorProps> = ({ sections, title }) => {
  const [editingValues, setEditingValues] = useState<Record<string, any>>({});
  const updateSetting = useUpdateSiteSetting();

  const handleSave = async (key: string, value: any) => {
    try {
      await updateSetting.mutateAsync({ key, value });
      toast.success(`${key} updated successfully!`);
      setEditingValues(prev => ({ ...prev, [key]: undefined }));
    } catch (error) {
      toast.error(`Failed to update ${key}`);
    }
  };

  const renderField = (section: ContentSection) => {
    const currentValue = editingValues[section.key] ?? section.defaultValue;

    switch (section.type) {
      case 'textarea':
        return (
          <Textarea
            value={currentValue || ''}
            onChange={(e) => setEditingValues(prev => ({ ...prev, [section.key]: e.target.value }))}
            placeholder={section.description}
            rows={4}
          />
        );
      case 'json':
        return (
          <Textarea
            value={currentValue ? JSON.stringify(currentValue, null, 2) : ''}
            onChange={(e) => {
              try {
                const parsed = JSON.parse(e.target.value);
                setEditingValues(prev => ({ ...prev, [section.key]: parsed }));
              } catch {
                setEditingValues(prev => ({ ...prev, [section.key]: e.target.value }));
              }
            }}
            placeholder={section.description}
            rows={6}
            className="font-mono text-sm"
          />
        );
      default:
        return (
          <Input
            value={currentValue || ''}
            onChange={(e) => setEditingValues(prev => ({ ...prev, [section.key]: e.target.value }))}
            placeholder={section.description}
          />
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Edit3 className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>
          Edit the content that appears on your website
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section) => (
          <div key={section.key} className="space-y-3 p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor={section.key} className="text-sm font-medium">
                  {section.title}
                </Label>
                <p className="text-xs text-gray-500 mt-1">{section.description}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {section.type}
              </Badge>
            </div>
            
            {renderField(section)}
            
            <Button
              onClick={() => handleSave(section.key, editingValues[section.key])}
              disabled={editingValues[section.key] === undefined || updateSetting.isPending}
              size="sm"
              className="mt-2"
            >
              <Save className="h-4 w-4 mr-1" />
              Save {section.title}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};