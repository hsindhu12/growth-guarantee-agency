// Update this to your PHP backend URL
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://yourdomain.com/api' // Replace with your Hostinger domain
  : 'http://localhost/backend-php'; // For local PHP development

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('authToken');
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    if (this.token && !config.headers?.['Authorization']) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${this.token}`,
      };
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(error.error || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  async login(email: string, password: string) {
    const result = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (result.token) {
      this.setToken(result.token);
    }
    
    return result;
  }

  async logout() {
    await this.request('/auth/logout', { method: 'POST' });
    this.clearToken();
  }

  async verifyToken() {
    return await this.request('/auth/verify');
  }

  // Blog methods
  async getBlogPosts(params?: { featured?: boolean; category?: string; limit?: number; offset?: number }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const query = searchParams.toString();
    return await this.request(`/blog${query ? `?${query}` : ''}`);
  }

  async getBlogPost(slug: string) {
    return await this.request(`/blog/${slug}`);
  }

  async createBlogPost(data: any) {
    return await this.request('/blog', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateBlogPost(id: string, data: any) {
    return await this.request(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteBlogPost(id: string) {
    return await this.request(`/blog/${id}`, { method: 'DELETE' });
  }

  // Success stories methods
  async getSuccessStories(params?: { featured?: boolean; limit?: number; offset?: number }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const query = searchParams.toString();
    return await this.request(`/success-stories${query ? `?${query}` : ''}`);
  }

  async getSuccessStory(id: string) {
    return await this.request(`/success-stories/${id}`);
  }

  async createSuccessStory(data: any) {
    return await this.request('/success-stories', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateSuccessStory(id: string, data: any) {
    return await this.request(`/success-stories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteSuccessStory(id: string) {
    return await this.request(`/success-stories/${id}`, { method: 'DELETE' });
  }

  // Contact methods
  async submitContact(data: any) {
    return await this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getContacts(params?: { status?: string; limit?: number; offset?: number }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const query = searchParams.toString();
    return await this.request(`/contact${query ? `?${query}` : ''}`);
  }

  async updateContactStatus(id: string, status: string) {
    return await this.request(`/contact/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Newsletter methods
  async subscribeNewsletter(email: string, name?: string) {
    return await this.request('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email, name }),
    });
  }

  async unsubscribeNewsletter(email: string) {
    return await this.request('/newsletter/unsubscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async getNewsletterSubscribers(params?: { status?: string; limit?: number; offset?: number }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const query = searchParams.toString();
    return await this.request(`/newsletter/subscribers${query ? `?${query}` : ''}`);
  }

  // Service pages methods
  async getServicePages() {
    return await this.request('/services');
  }

  async getServicePage(serviceType: string) {
    return await this.request(`/services/${serviceType}`);
  }

  async createServicePage(data: any) {
    return await this.request('/services', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateServicePage(id: string, data: any) {
    return await this.request(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Admin methods
  async getDashboardStats() {
    return await this.request('/admin/dashboard');
  }

  async getSiteSettings() {
    return await this.request('/admin/settings');
  }

  async updateSiteSetting(key: string, value: any) {
    return await this.request(`/admin/settings/${key}`, {
      method: 'PUT',
      body: JSON.stringify({ value }),
    });
  }

  async getAdminBlogPosts(params?: { limit?: number; offset?: number }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const query = searchParams.toString();
    return await this.request(`/admin/blog-posts${query ? `?${query}` : ''}`);
  }

  async getAdminSuccessStories(params?: { limit?: number; offset?: number }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const query = searchParams.toString();
    return await this.request(`/admin/success-stories${query ? `?${query}` : ''}`);
  }
}

export const apiClient = new ApiClient(API_BASE_URL);