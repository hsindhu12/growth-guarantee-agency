import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { useServicePages, useUpdateServicePage } from "@/hooks/useServicePages";
import { toast } from "sonner";

export const ServiceManager: React.FC = () => {
  const { data: servicePages, isLoading } = useServicePages();
  const updateServicePage = useUpdateServicePage();
  const [editingService, setEditingService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    service_type: '',
    hero_content: { heading: '', description: '', cta: '' },
    features: [{ title: '', description: '' }],
    published: true
  });

  const handleSave = async (serviceId: string) => {
    try {
      await updateServicePage.mutateAsync({
        id: serviceId,
        updates: {
          title: formData.title,
          subtitle: formData.subtitle,
          hero_content: formData.hero_content,
          features: formData.features,
          published: formData.published
        }
      });
      toast.success('Service updated successfully!');
      setEditingService(null);
    } catch (error) {
      toast.error('Failed to update service');
    }
  };

  const togglePublished = async (service: any) => {
    try {
      await updateServicePage.mutateAsync({
        id: service.id,
        updates: { published: !service.published }
      });
      toast.success(`Service ${!service.published ? 'published' : 'unpublished'} successfully!`);
    } catch (error) {
      toast.error('Failed to update service status');
    }
  };

  const startEditing = (service: any) => {
    setFormData({
      title: service.title,
      subtitle: service.subtitle || '',
      service_type: service.service_type,
      hero_content: service.hero_content || { heading: '', description: '', cta: '' },
      features: service.features || [{ title: '', description: '' }],
      published: service.published
    });
    setEditingService(service.id);
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <p>Loading services...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Service Pages Management
        </CardTitle>
        <CardDescription>
          Manage your service offerings and their content
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {servicePages?.data?.map((service) => (
          <div key={service.id} className="border rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <Badge variant={service.published ? "default" : "secondary"}>
                  {service.published ? "Published" : "Draft"}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {service.service_type}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => togglePublished(service)}
                >
                  {service.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => startEditing(service)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {editingService === service.id && (
              <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Service Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={formData.subtitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Hero Description</Label>
                  <Textarea
                    id="description"
                    value={formData.hero_content?.description || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      hero_content: { ...prev.hero_content, description: e.target.value }
                    }))}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Features</Label>
                  {formData.features.map((feature, index) => (
                    <div key={index} className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="Feature title"
                        value={feature.title}
                        onChange={(e) => {
                          const newFeatures = [...formData.features];
                          newFeatures[index] = { ...newFeatures[index], title: e.target.value };
                          setFormData(prev => ({ ...prev, features: newFeatures }));
                        }}
                      />
                      <Input
                        placeholder="Feature description"
                        value={feature.description}
                        onChange={(e) => {
                          const newFeatures = [...formData.features];
                          newFeatures[index] = { ...newFeatures[index], description: e.target.value };
                          setFormData(prev => ({ ...prev, features: newFeatures }));
                        }}
                      />
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      features: [...prev.features, { title: '', description: '' }]
                    }))}
                  >
                    Add Feature
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => handleSave(service.id)}
                    disabled={updateServicePage.isPending}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setEditingService(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            <div className="text-sm text-muted-foreground">
              <p>{service.subtitle}</p>
              <p className="mt-1">Features: {service.features?.length || 0} items</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};