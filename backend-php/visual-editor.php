<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ICONA Admin - Visual Page Editor</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
    <style>
        .drag-handle {
            cursor: grab;
        }
        .drag-handle:active {
            cursor: grabbing;
        }
        .page-element {
            transition: all 0.2s ease;
        }
        .page-element:hover {
            outline: 2px dashed #3b82f6;
        }
        .page-element.selected {
            outline: 2px solid #3b82f6;
            background-color: rgba(59, 130, 246, 0.1);
        }
    </style>
</head>
<body class="bg-gray-100">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <h1 class="text-xl font-semibold text-gray-900">ICONA Admin</h1>
                    <span class="ml-2 text-sm text-gray-500">Visual Page Editor</span>
                </div>
                <div class="flex items-center space-x-4">
                    <button id="save-page" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        <i class="fas fa-save mr-2"></i>Save Page
                    </button>
                    <button id="preview-page" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        <i class="fas fa-eye mr-2"></i>Preview
                    </button>
                    <a href="admin.php" class="text-gray-600 hover:text-gray-900">
                        <i class="fas fa-arrow-left mr-2"></i>Back to Admin
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <div class="flex h-screen">
        <!-- Sidebar - Elements Panel -->
        <div class="w-80 bg-white shadow-lg overflow-y-auto">
            <div class="p-4">
                <h2 class="text-lg font-semibold mb-4">Page Elements</h2>
                
                <!-- Element Categories -->
                <div class="space-y-4">
                    <!-- Content Elements -->
                    <div>
                        <h3 class="text-sm font-medium text-gray-700 mb-2">Content</h3>
                        <div class="grid grid-cols-2 gap-2">
                            <button class="element-btn" data-type="heading">
                                <i class="fas fa-heading text-blue-600"></i>
                                <span>Heading</span>
                            </button>
                            <button class="element-btn" data-type="paragraph">
                                <i class="fas fa-paragraph text-green-600"></i>
                                <span>Paragraph</span>
                            </button>
                            <button class="element-btn" data-type="image">
                                <i class="fas fa-image text-purple-600"></i>
                                <span>Image</span>
                            </button>
                            <button class="element-btn" data-type="button">
                                <i class="fas fa-mouse-pointer text-red-600"></i>
                                <span>Button</span>
                            </button>
                        </div>
                    </div>

                    <!-- Layout Elements -->
                    <div>
                        <h3 class="text-sm font-medium text-gray-700 mb-2">Layout</h3>
                        <div class="grid grid-cols-2 gap-2">
                            <button class="element-btn" data-type="container">
                                <i class="fas fa-square text-gray-600"></i>
                                <span>Container</span>
                            </button>
                            <button class="element-btn" data-type="columns">
                                <i class="fas fa-columns text-indigo-600"></i>
                                <span>Columns</span>
                            </button>
                            <button class="element-btn" data-type="spacer">
                                <i class="fas fa-arrows-alt-v text-yellow-600"></i>
                                <span>Spacer</span>
                            </button>
                            <button class="element-btn" data-type="divider">
                                <i class="fas fa-minus text-gray-600"></i>
                                <span>Divider</span>
                            </button>
                        </div>
                    </div>

                    <!-- Advanced Elements -->
                    <div>
                        <h3 class="text-sm font-medium text-gray-700 mb-2">Advanced</h3>
                        <div class="grid grid-cols-2 gap-2">
                            <button class="element-btn" data-type="hero">
                                <i class="fas fa-star text-yellow-500"></i>
                                <span>Hero Section</span>
                            </button>
                            <button class="element-btn" data-type="gallery">
                                <i class="fas fa-images text-pink-600"></i>
                                <span>Gallery</span>
                            </button>
                            <button class="element-btn" data-type="testimonial">
                                <i class="fas fa-quote-left text-teal-600"></i>
                                <span>Testimonial</span>
                            </button>
                            <button class="element-btn" data-type="contact-form">
                                <i class="fas fa-envelope text-orange-600"></i>
                                <span>Contact Form</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Page Settings -->
                <div class="mt-8 pt-4 border-t">
                    <h3 class="text-sm font-medium text-gray-700 mb-2">Page Settings</h3>
                    <div class="space-y-3">
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Page Title</label>
                            <input type="text" id="page-title" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" placeholder="Enter page title">
                        </div>
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Page Slug</label>
                            <input type="text" id="page-slug" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" placeholder="page-url">
                        </div>
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Meta Description</label>
                            <textarea id="page-meta" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" rows="3" placeholder="SEO description"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="flex-1 flex">
            <!-- Canvas -->
            <div class="flex-1 p-4 overflow-y-auto">
                <div class="max-w-4xl mx-auto">
                    <div id="page-canvas" class="bg-white shadow-lg rounded-lg min-h-screen p-8">
                        <div class="text-center text-gray-400 py-20">
                            <i class="fas fa-plus-circle text-6xl mb-4"></i>
                            <p class="text-lg">Start building your page by adding elements from the sidebar</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Properties Panel -->
            <div class="w-80 bg-white shadow-lg overflow-y-auto" id="properties-panel">
                <div class="p-4">
                    <h2 class="text-lg font-semibold mb-4">Element Properties</h2>
                    <div id="properties-content" class="text-gray-500 text-center py-8">
                        Select an element to edit its properties
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        class VisualPageEditor {
            constructor() {
                this.selectedElement = null;
                this.elementCounter = 0;
                this.pageData = {
                    title: '',
                    slug: '',
                    meta_description: '',
                    elements: []
                };
                
                this.init();
            }

            init() {
                this.bindEvents();
                this.initSortable();
            }

            bindEvents() {
                // Element buttons
                document.querySelectorAll('.element-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const elementType = e.currentTarget.dataset.type;
                        this.addElement(elementType);
                    });
                });

                // Save button
                document.getElementById('save-page').addEventListener('click', () => {
                    this.savePage();
                });

                // Preview button
                document.getElementById('preview-page').addEventListener('click', () => {
                    this.previewPage();
                });

                // Page settings
                document.getElementById('page-title').addEventListener('input', (e) => {
                    this.pageData.title = e.target.value;
                    this.updateSlug();
                });

                document.getElementById('page-slug').addEventListener('input', (e) => {
                    this.pageData.slug = e.target.value;
                });

                document.getElementById('page-meta').addEventListener('input', (e) => {
                    this.pageData.meta_description = e.target.value;
                });
            }

            initSortable() {
                const canvas = document.getElementById('page-canvas');
                Sortable.create(canvas, {
                    animation: 150,
                    handle: '.drag-handle',
                    onEnd: (evt) => {
                        this.updateElementOrder();
                    }
                });
            }

            addElement(type) {
                const canvas = document.getElementById('page-canvas');
                const elementId = `element-${++this.elementCounter}`;
                
                let elementHTML = '';
                
                switch(type) {
                    case 'heading':
                        elementHTML = `
                            <div class="page-element mb-4" data-id="${elementId}" data-type="heading">
                                <div class="drag-handle text-gray-400 hover:text-gray-600 mb-2">
                                    <i class="fas fa-grip-vertical"></i>
                                </div>
                                <h2 class="text-3xl font-bold text-gray-900 editable" contenteditable="true">
                                    Your Heading Here
                                </h2>
                            </div>
                        `;
                        break;
                    case 'paragraph':
                        elementHTML = `
                            <div class="page-element mb-4" data-id="${elementId}" data-type="paragraph">
                                <div class="drag-handle text-gray-400 hover:text-gray-600 mb-2">
                                    <i class="fas fa-grip-vertical"></i>
                                </div>
                                <p class="text-gray-700 leading-relaxed editable" contenteditable="true">
                                    Your paragraph text goes here. Click to edit this content.
                                </p>
                            </div>
                        `;
                        break;
                    case 'image':
                        elementHTML = `
                            <div class="page-element mb-4" data-id="${elementId}" data-type="image">
                                <div class="drag-handle text-gray-400 hover:text-gray-600 mb-2">
                                    <i class="fas fa-grip-vertical"></i>
                                </div>
                                <div class="bg-gray-200 rounded-lg p-8 text-center">
                                    <i class="fas fa-image text-gray-400 text-4xl mb-2"></i>
                                    <p class="text-gray-600">Click to upload image</p>
                                </div>
                            </div>
                        `;
                        break;
                    case 'button':
                        elementHTML = `
                            <div class="page-element mb-4" data-id="${elementId}" data-type="button">
                                <div class="drag-handle text-gray-400 hover:text-gray-600 mb-2">
                                    <i class="fas fa-grip-vertical"></i>
                                </div>
                                <div class="text-center">
                                    <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 editable" contenteditable="true">
                                        Click Me
                                    </button>
                                </div>
                            </div>
                        `;
                        break;
                    case 'hero':
                        elementHTML = `
                            <div class="page-element mb-8" data-id="${elementId}" data-type="hero">
                                <div class="drag-handle text-gray-400 hover:text-gray-600 mb-2">
                                    <i class="fas fa-grip-vertical"></i>
                                </div>
                                <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 text-center">
                                    <h1 class="text-5xl font-bold mb-4 editable" contenteditable="true">
                                        Welcome to Our Amazing Service
                                    </h1>
                                    <p class="text-xl mb-8 editable" contenteditable="true">
                                        Transform your business with our innovative solutions
                                    </p>
                                    <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 editable" contenteditable="true">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        `;
                        break;
                    default:
                        return;
                }

                // Remove empty state if exists
                const emptyState = canvas.querySelector('.text-center.text-gray-400');
                if (emptyState) {
                    emptyState.remove();
                }

                canvas.insertAdjacentHTML('beforeend', elementHTML);
                
                // Bind click events to new element
                const newElement = canvas.lastElementChild;
                this.bindElementEvents(newElement);
            }

            bindElementEvents(element) {
                element.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.selectElement(element);
                });

                // Double click to edit
                const editableElements = element.querySelectorAll('.editable');
                editableElements.forEach(editable => {
                    editable.addEventListener('dblclick', (e) => {
                        e.stopPropagation();
                        editable.focus();
                    });
                });
            }

            selectElement(element) {
                // Remove previous selection
                document.querySelectorAll('.page-element.selected').forEach(el => {
                    el.classList.remove('selected');
                });

                // Add selection to current element
                element.classList.add('selected');
                this.selectedElement = element;
                
                // Update properties panel
                this.updatePropertiesPanel(element);
            }

            updatePropertiesPanel(element) {
                const propertiesContent = document.getElementById('properties-content');
                const elementType = element.dataset.type;
                const elementId = element.dataset.id;

                let propertiesHTML = `
                    <div class="space-y-4">
                        <div>
                            <h3 class="font-semibold text-gray-900 mb-2">${elementType.charAt(0).toUpperCase() + elementType.slice(1)} Properties</h3>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Element ID</label>
                            <input type="text" value="${elementId}" readonly class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">CSS Classes</label>
                            <input type="text" placeholder="custom-class another-class" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Margin (px)</label>
                            <div class="grid grid-cols-2 gap-2">
                                <input type="number" placeholder="Top" class="px-3 py-2 border border-gray-300 rounded-md text-sm">
                                <input type="number" placeholder="Bottom" class="px-3 py-2 border border-gray-300 rounded-md text-sm">
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Padding (px)</label>
                            <div class="grid grid-cols-2 gap-2">
                                <input type="number" placeholder="Horizontal" class="px-3 py-2 border border-gray-300 rounded-md text-sm">
                                <input type="number" placeholder="Vertical" class="px-3 py-2 border border-gray-300 rounded-md text-sm">
                            </div>
                        </div>

                        <div class="pt-4 border-t">
                            <button class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700" onclick="editor.deleteElement()">
                                <i class="fas fa-trash mr-2"></i>Delete Element
                            </button>
                        </div>
                    </div>
                `;

                propertiesContent.innerHTML = propertiesHTML;
            }

            deleteElement() {
                if (this.selectedElement) {
                    this.selectedElement.remove();
                    this.selectedElement = null;
                    document.getElementById('properties-content').innerHTML = '<div class="text-gray-500 text-center py-8">Select an element to edit its properties</div>';
                }
            }

            updateSlug() {
                const title = document.getElementById('page-title').value;
                const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                document.getElementById('page-slug').value = slug;
                this.pageData.slug = slug;
            }

            updateElementOrder() {
                // Update internal element order based on DOM
                const elements = document.querySelectorAll('.page-element');
                this.pageData.elements = Array.from(elements).map((el, index) => ({
                    id: el.dataset.id,
                    type: el.dataset.type,
                    order: index,
                    content: this.extractElementContent(el)
                }));
            }

            extractElementContent(element) {
                const editables = element.querySelectorAll('.editable');
                const content = {};
                
                editables.forEach((editable, index) => {
                    content[`text_${index}`] = editable.innerHTML;
                });

                return content;
            }

            savePage() {
                this.updateElementOrder();
                
                const pageData = {
                    title: this.pageData.title || 'Untitled Page',
                    slug: this.pageData.slug || 'untitled-page',
                    meta_description: this.pageData.meta_description || '',
                    content: JSON.stringify(this.pageData.elements)
                };

                // Show loading state
                const saveBtn = document.getElementById('save-page');
                const originalText = saveBtn.innerHTML;
                saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Saving...';
                saveBtn.disabled = true;

                // Simulate API call (replace with actual save)
                setTimeout(() => {
                    console.log('Saving page:', pageData);
                    
                    // Reset button
                    saveBtn.innerHTML = originalText;
                    saveBtn.disabled = false;
                    
                    // Show success message
                    alert('Page saved successfully!');
                }, 1000);
            }

            previewPage() {
                // Open preview in new window
                const previewWindow = window.open('', '_blank');
                previewWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>${this.pageData.title || 'Preview'}</title>
                        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                    </head>
                    <body>
                        <div class="max-w-4xl mx-auto p-8">
                            ${document.getElementById('page-canvas').innerHTML}
                        </div>
                    </body>
                    </html>
                `);
            }
        }

        // Initialize editor
        const editor = new VisualPageEditor();
    </script>

    <style>
        .element-btn {
            @apply flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer text-sm;
        }
        .element-btn i {
            @apply text-lg mb-1;
        }
    </style>
</body>
</html>