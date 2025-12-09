# Space-Themed Developer Portfolio

A modern, premium, space-themed developer portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Space-themed UI with dark galaxy aesthetics
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Accessible**: Keyboard navigation, focus states, and ARIA labels
- **SEO Optimized**: Meta tags and semantic HTML
- **Smooth Animations**: Framer Motion powered animations
- **Type-Safe**: Full TypeScript support
- **Static Content**: All data stored in local TypeScript files (no database required)

## 📋 Sections

1. **Hero Section**: Animated typing effect with rotating roles
2. **About**: Personal introduction and developer journey
3. **Tech Stack**: Categorized technology icons with hover effects
4. **Portfolio**: Project cards with images, descriptions, and links
5. **Testimonials**: Auto-scrolling testimonial carousel
6. **Certificates & Achievements**: Showcase of certifications and milestones
7. **Contact**: Contact form with validation and social links
8. **Footer**: Social media links and back-to-top button

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Personal Information

Edit the following files to customize your portfolio:

- **Hero Section**: Update name and tagline in `src/components/Hero.tsx`
- **About Section**: Modify content in `src/components/About.tsx`
- **Projects**: Edit `src/data/projects.ts`
- **Testimonials**: Update `src/data/testimonials.ts`
- **Certificates**: Modify `src/data/certificates.ts`
- **Achievements**: Edit `src/data/achievements.ts`
- **Tech Stack**: Update `src/data/techstack.ts`
- **Social Links**: Change URLs in `src/components/Contact.tsx` and `src/components/Footer.tsx`
- **Email**: Update email address in `src/components/Contact.tsx`

### Styling

- **Colors**: Modify `tailwind.config.ts` to change the color scheme
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Global Styles**: Edit `src/app/globals.css`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## 📧 Contact Form Setup

The contact form currently uses a simulated submission. To enable actual email sending, integrate with:

- **EmailJS**: Client-side email service
- **SendGrid**: Email API service
- **Serverless Function**: Create an API route in Next.js
- **Formspree**: Form handling service

Example EmailJS integration:

```typescript
// Install: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

// In handleSubmit:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effects on navbar and cards
- **Gradient Text**: Animated gradient text effects
- **Smooth Scrolling**: Smooth scroll behavior throughout
- **Hover Effects**: Interactive hover states on all clickable elements
- **Loading Animations**: Entrance animations on scroll
- **Responsive Typography**: Using `clamp()` for fluid typography

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Anjela Sofia G. Sarmiento**

- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub URL]
- LinkedIn: [Your LinkedIn URL]

---

Built with ❤️ using Next.js and TypeScript

