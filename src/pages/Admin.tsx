
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContentEditor } from '@/components/ui/content-editor';
import { 
  LayoutDashboard, 
  FileText, 
  Palette, 
  Settings, 
  Users, 
  Mail,
  MessageSquare,
  Briefcase,
  LogOut,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useSuccessStories } from '@/hooks/useSuccessStories';
import { useSiteSettings } from '@/hooks/useSiteSettings';
// import { useThemes } from '@/hooks/useThemes';

const Admin = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { data: blogPosts } = useBlogPosts();
  const { data: successStories } = useSuccessStories();
  const { data: siteSettings } = useSiteSettings();
  // const { data: themes } = useThemes();

  React.useEffect(() => {
    console.log('Admin: useEffect triggered - user:', user, 'loading:', loading);
    if (!loading && !user) {
      console.log('Admin: No user found, redirecting to /auth');
      navigate('/auth');
    } else if (user && !loading) {
      console.log('Admin: User found, staying on admin page');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  const stats = [
    { title: 'Blog Posts', value: blogPosts?.length || 0, icon: FileText },
    { title: 'Success Stories', value: successStories?.length || 0, icon: Users },
    { title: 'Themes', value: 0, icon: Palette },
    { title: 'Settings', value: siteSettings?.length || 0, icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <LayoutDashboard className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">ICONA Admin</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/')}>
                <Globe className="h-4 w-4 mr-2" />
                View Website
              </Button>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.email}!
          </h2>
          <p className="text-gray-600">
            Manage your ICONA website content and settings from this dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Recent Blog Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {blogPosts?.slice(0, 5).map((post) => (
                    <div key={post.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="text-sm font-medium">{post.title}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  )) || <p className="text-gray-500">No blog posts yet</p>}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Success Stories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {successStories?.slice(0, 5).map((story) => (
                    <div key={story.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="text-sm font-medium">{story.client_name}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        story.featured ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {story.featured ? 'Featured' : 'Standard'}
                      </span>
                    </div>
                  )) || <p className="text-gray-500">No success stories yet</p>}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="p-6 h-auto flex-col" onClick={() => navigate('/page-editor/new')}>
                    <Palette className="h-8 w-8 mb-2" />
                    <span>Page Builder</span>
                    <span className="text-sm text-gray-500">Visual page editor</span>
                  </Button>
                  <Button variant="outline" className="p-6 h-auto flex-col">
                    <FileText className="h-8 w-8 mb-2" />
                    <span>Manage Blog Posts</span>
                    <span className="text-sm text-gray-500">{blogPosts?.length || 0} posts</span>
                  </Button>
                  <Button variant="outline" className="p-6 h-auto flex-col">
                    <Users className="h-8 w-8 mb-2" />
                    <span>Success Stories</span>
                    <span className="text-sm text-gray-500">{successStories?.length || 0} stories</span>
                  </Button>
                  <Button variant="outline" className="p-6 h-auto flex-col">
                    <Globe className="h-8 w-8 mb-2" />
                    <span>Service Pages</span>
                    <span className="text-sm text-gray-500">Manage service content</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="themes">
            <Card>
              <CardHeader>
                <CardTitle>Theme Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Customize your website's appearance and branding.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="text-gray-500">Theme management coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">View and manage contact form submissions and inquiries.</p>
                <div className="mt-4 space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Form Submissions
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Service Inquiries
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Newsletter Subscribers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Career Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Manage job applications and recruitment.</p>
                <Button variant="outline" className="mt-4">
                  View Applications
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            {/* Content Management */}
            <div className="grid gap-6">
              <ContentEditor
                title="Header & Footer Content"
                sections={[
                  {
                    key: 'header_logo_text',
                    title: 'Logo Text',
                    description: 'Text displayed in the header logo',
                    type: 'text',
                    defaultValue: 'ICONA'
                  },
                  {
                    key: 'header_button_text',
                    title: 'Header Button Text',
                    description: 'Text for the main CTA button in header',
                    type: 'text',
                    defaultValue: 'Get Started'
                  },
                  {
                    key: 'footer_description',
                    title: 'Footer Description',
                    description: 'Company description in footer',
                    type: 'textarea',
                    defaultValue: 'Your trusted partner for comprehensive digital growth and innovative business solutions across all platforms.'
                  }
                ]}
              />

              <ContentEditor
                title="Hero Section"
                sections={[
                  {
                    key: 'hero_title',
                    title: 'Hero Title',
                    description: 'Main heading text for the hero section',
                    type: 'text',
                    defaultValue: 'Welcome to ICONA'
                  },
                  {
                    key: 'hero_subtitle',
                    title: 'Hero Subtitle',
                    description: 'Secondary heading text',
                    type: 'text',
                    defaultValue: 'Digital Excellence'
                  },
                  {
                    key: 'hero_description',
                    title: 'Hero Description',
                    description: 'Main description paragraph',
                    type: 'textarea',
                    defaultValue: 'ICONA delivers comprehensive digital solutions that drive measurable growth for your business.'
                  },
                  {
                    key: 'hero_badge_text',
                    title: 'Hero Badge Text',
                    description: 'Text inside the floating badge',
                    type: 'text',
                    defaultValue: '✨ Professional Digital Growth Solutions ✨'
                  },
                  {
                    key: 'hero_primary_button_text',
                    title: 'Primary Button Text',
                    description: 'Text for the main CTA button',
                    type: 'text',
                    defaultValue: 'Start Your Growth Journey'
                  },
                  {
                    key: 'hero_secondary_button_text',
                    title: 'Secondary Button Text',
                    description: 'Text for the secondary button',
                    type: 'text',
                    defaultValue: 'View Our Portfolio'
                  },
                  {
                    key: 'hero_stats',
                    title: 'Hero Statistics',
                    description: 'Statistics displayed in the hero section (JSON format)',
                    type: 'json',
                    defaultValue: [
                      { number: "500+", label: "Brands Grown" },
                      { number: "99%", label: "Success Rate" },
                      { number: "$50M+", label: "Revenue Generated" },
                      { number: "10+", label: "Years Experience" }
                    ]
                  }
                ]}
              />
              
              <ContentEditor
                title="Blog Section"
                sections={[
                  {
                    key: 'blog_section_title',
                    title: 'Blog Section Title',
                    description: 'Main heading for blog section',
                    type: 'text',
                    defaultValue: 'ICONA Expert Knowledge'
                  },
                  {
                    key: 'blog_section_subtitle',
                    title: 'Blog Section Subtitle',
                    description: 'Description below blog title',
                    type: 'textarea',
                    defaultValue: 'Learn from ICONA\'s years of experience in digital growth, strategic marketing, and marketplace optimization 📈'
                  },
                  {
                    key: 'blog_section_badge',
                    title: 'Blog Section Badge',
                    description: 'Badge text above blog title',
                    type: 'text',
                    defaultValue: '📚 Expert Insights & Strategies'
                  },
                  {
                    key: 'blog_cta_title',
                    title: 'Blog CTA Title',
                    description: 'Title for blog call-to-action',
                    type: 'text',
                    defaultValue: 'Want More Expert Knowledge?'
                  },
                  {
                    key: 'blog_cta_description',
                    title: 'Blog CTA Description',
                    description: 'Description for blog call-to-action',
                    type: 'textarea',
                    defaultValue: 'Subscribe to get ICONA\'s latest growth strategies, market insights, and proven methodologies delivered weekly.'
                  },
                  {
                    key: 'blog_cta_button_text',
                    title: 'Blog CTA Button Text',
                    description: 'Text for blog CTA button',
                    type: 'text',
                    defaultValue: '📈 Get ICONA\'s Weekly Insights'
                  }
                ]}
              />

              <ContentEditor
                title="Services Section"
                sections={[
                  {
                    key: 'services_section_title',
                    title: 'Services Section Title',
                    description: 'Main heading for services section',
                    type: 'text',
                    defaultValue: 'Complete Digital Solutions'
                  },
                  {
                    key: 'services_section_subtitle',
                    title: 'Services Section Subtitle',
                    description: 'Description below services title',
                    type: 'textarea',
                    defaultValue: 'From ecommerce marketing to website development, we handle every aspect of your digital success 🚀'
                  },
                  {
                    key: 'services_section_badge',
                    title: 'Services Section Badge',
                    description: 'Badge text above services title',
                    type: 'text',
                    defaultValue: '🎯 Our Services'
                  }
                ]}
              />

              <ContentEditor
                title="CTA Section"
                sections={[
                  {
                    key: 'cta_section_title',
                    title: 'CTA Section Title',
                    description: 'Main heading for call-to-action section',
                    type: 'text',
                    defaultValue: 'Ready to Guarantee Your Growth?'
                  },
                  {
                    key: 'cta_section_description',
                    title: 'CTA Section Description',
                    description: 'Description text for CTA section',
                    type: 'textarea',
                    defaultValue: 'Join 500+ brands that have achieved explosive growth with our proven strategies.'
                  },
                  {
                    key: 'cta_primary_button_text',
                    title: 'CTA Primary Button Text',
                    description: 'Text for the main CTA button',
                    type: 'text',
                    defaultValue: '📞 Get Free Strategy Call'
                  },
                  {
                    key: 'cta_secondary_button_text',
                    title: 'CTA Secondary Button Text',
                    description: 'Text for the secondary CTA button',
                    type: 'text',
                    defaultValue: '📱 WhatsApp: +91 XXXXX XXXXX'
                  }
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
