import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageBuilder, PageData } from '@/components/VisualEditor/PageBuilder';
import { apiClient } from '@/lib/api';
import { toast } from 'sonner';

const PageEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pageData, setPageData] = React.useState<PageData | undefined>();

  React.useEffect(() => {
    if (id && id !== 'new') {
      // Load existing page
      apiClient.getPage(id).then(setPageData).catch(console.error);
    }
  }, [id]);

  const handleSave = async (data: PageData) => {
    try {
      if (id === 'new') {
        await apiClient.createPage(data);
        toast.success('Page created successfully!');
      } else {
        await apiClient.updatePage(id!, data);
        toast.success('Page updated successfully!');
      }
      navigate('/admin');
    } catch (error) {
      toast.error('Failed to save page');
      throw error;
    }
  };

  return (
    <PageBuilder
      initialData={pageData}
      onSave={handleSave}
    />
  );
};

export default PageEditor;