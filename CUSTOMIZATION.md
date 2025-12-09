# 🎨 Customization Guide

This guide will help you customize your portfolio to make it uniquely yours.

## 📝 Quick Start Customization

### 1. Personal Information (5 minutes)

**File: `src/components/Hero.jsx`**

- Update your name
- Modify job title
- Change statistics (years of experience, projects count)

**File: `src/components/About.jsx`**

- Edit professional summary
- Update contact information
- Modify key achievements

**File: `src/components/Contact.jsx`**

- Update email address
- Change phone number
- Modify location
- Update LinkedIn URL

### 2. Professional Experience (10 minutes)

**File: `src/components/Experience.jsx`**

Update the `experiences` array with your work history:

```javascript
const experiences = [
  {
    company: "Your Company Name",
    position: "Your Position",
    duration: "Start Date – End Date",
    location: "City, Country",
    type: "Full-time",
    highlights: [
      "Achievement 1",
      "Achievement 2",
      // Add more...
    ],
  },
];
```

### 3. Projects (10 minutes)

**File: `src/components/Projects.jsx`**

Update the `projects` array:

```javascript
const projects = [
  {
    title: "Project Name",
    category: "react", // or 'wordpress'
    tech: ["React.js", "Redux", "etc"],
    description: "Project description...",
    features: ["Feature 1", "Feature 2"],
    highlight: "Special achievement", // optional
  },
];
```

### 4. Skills (5 minutes)

**File: `src/components/Skills.jsx`**

Modify the `skillCategories` array to match your skill set.

### 5. Education & Certifications (5 minutes)

**File: `src/components/Education.jsx`**

Update education and certifications arrays with your credentials.

## 🎨 Styling Customization

### Change Color Scheme

**File: `tailwind.config.js`**

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Change to your brand color
      secondary: '#8b5cf6',  // Secondary accent color
      dark: '#0f172a',       // Dark backgrounds
      light: '#f8fafc',      // Light backgrounds
    },
  },
},
```

**Popular Color Schemes:**

- **Blue & Purple** (Current): Professional and modern
- **Green & Teal**: `primary: '#10b981'`, `secondary: '#14b8a6'`
- **Orange & Red**: `primary: '#f97316'`, `secondary: '#ef4444'`
- **Pink & Purple**: `primary: '#ec4899'`, `secondary: '#a855f7'`

### Modify Animations

**File: `tailwind.config.js`**

Adjust animation timing:

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',  // Change duration
  'slide-up': 'slideUp 0.6s ease-out',
  'slide-in': 'slideIn 0.6s ease-out',
},
```

### Change Fonts

**File: `index.html`**

Add Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet" />
```

**File: `tailwind.config.js`**

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
},
```

## 🖼️ Adding Images/Photos

### Add Profile Photo

1. Add your photo to `public/` folder (e.g., `profile.jpg`)

2. Update **Hero.jsx**:

```javascript
<div className="mb-8">
  <img
    src="/my-portfolio/profile.jpg"
    alt="Chetan Shinde"
    className="w-48 h-48 rounded-full mx-auto shadow-lg"
  />
</div>
```

### Add Project Screenshots

1. Add images to `public/projects/` folder
2. Update **Projects.jsx**:

```javascript
{
  title: 'Project Name',
  image: '/my-portfolio/projects/project1.jpg',
  // ... rest of project data
}
```

3. Display in template:

```javascript
{
  project.image && (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
  );
}
```

## 🔗 Navigation Customization

**File: `src/components/Navbar.jsx`**

Add or remove navigation links:

```javascript
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // Add custom section:
  { name: "Blog", href: "#blog" },
];
```

## 📱 Social Media Links

**File: `src/components/Footer.jsx`**

Add more social links:

```javascript
{
  name: 'Twitter',
  href: 'https://twitter.com/yourusername',
  icon: (/* Add Twitter SVG icon */)
}
```

## 🎯 Add New Sections

### Example: Add a Blog Section

1. **Create component**: `src/components/Blog.jsx`

```javascript
import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Blog Post Title",
      date: "Dec 9, 2025",
      excerpt: "Post description...",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="section-container bg-white">
      <h2 className="section-title">
        Latest <span className="text-primary">Blog Posts</span>
      </h2>
      {/* Add blog post cards */}
    </section>
  );
};

export default Blog;
```

2. **Import in App.jsx**:

```javascript
import Blog from "./components/Blog";

// Add in return:
<Blog />;
```

3. **Add to navigation** in Navbar.jsx

## 🌐 SEO Optimization

**File: `index.html`**

Update meta tags:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO Meta Tags -->
  <title>Chetan Shinde - Senior Software Engineer | React.js Developer</title>
  <meta
    name="description"
    content="Senior Software Engineer with 10+ years experience in React.js, WordPress, and Full Stack Development. Based in Pune, India." />
  <meta
    name="keywords"
    content="React Developer, WordPress Developer, Full Stack Engineer, Software Engineer" />
  <meta name="author" content="Chetan Prakash Shinde" />

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Chetan Shinde - Portfolio" />
  <meta
    property="og:description"
    content="Senior Software Engineer Portfolio" />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://chetan1804.github.io/my-portfolio/" />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Chetan Shinde - Portfolio" />
  <meta
    name="twitter:description"
    content="Senior Software Engineer Portfolio" />
</head>
```

## 🎨 Advanced Customization

### Add Dark Mode

1. Update **tailwind.config.js**:

```javascript
darkMode: 'class',
```

2. Create dark mode toggle in Navbar
3. Add dark mode classes throughout components

### Add Loading Animation

Create a loading component that displays while the page loads.

### Add Page Transitions

Use libraries like `framer-motion` for smooth page transitions.

## 📊 Analytics

### Add Google Analytics

1. Get your tracking ID from Google Analytics
2. Add to `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

## 🔧 Performance Optimization

### Optimize Images

- Use WebP format
- Compress images before adding
- Use lazy loading

### Code Splitting

Already handled by Vite!

### Minimize Bundle Size

```bash
npm run build
```

Check the dist folder size and optimize if needed.

## 💡 Tips

1. **Keep it Updated**: Regularly update your projects and experience
2. **Mobile First**: Always test on mobile devices
3. **Fast Loading**: Keep images optimized
4. **Accessibility**: Use proper ARIA labels and semantic HTML
5. **Browser Testing**: Test on Chrome, Firefox, Safari, Edge

## 🆘 Need Help?

- Check component comments in the code
- Review Tailwind CSS documentation
- Look at React documentation
- Test changes locally before deploying

---

Happy Customizing! 🎉
