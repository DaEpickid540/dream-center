# MHS Dream Center - Static Firebase Website

A beautiful, static Firebase-hosted website for the Mason High School Dream Center. Built with a Mason green color theme and fully responsive design.
Claude was used to scrape the original site and rewrite things to sound more fluid. This is an un-official website, made purely for building my 
portfolio, as they opted not to use it.

## 📋 Features

- **Fully Static**: No backend required, pure HTML/CSS/JavaScript
- **Mason Green Theme**: Custom color palette featuring Mason school colors
- **Responsive Design**: Mobile-friendly on all devices
- **Firebase Hosting**: Easy deployment and CDN delivery
- **Anonymous Authentication Ready**: Firebase anonymous auth pre-configured for future interactive features
- **No Image Hallucination**: Only uses text-based content and emoji/SVG graphics

## 🎨 Color Scheme

- **Mason Green**: `#00703C` - Primary brand color
- **Mason Light Green**: `#00A651` - Accent color
- **Mason Gold**: `#C6AE58` - Highlight color
- **White**: `#FFFFFF` - Background
- **Dark Text**: `#1a1a1a` - Primary text

## 📁 Project Structure

```
dream-center/
├── public/
│   ├── index.html           # Home page
│   ├── visit.html           # How to visit page
│   ├── services.html        # Services overview
│   ├── ideas.html           # Tutorials & ideas page
│   ├── styles.css           # Main stylesheet with Mason green theme
│   └── firebase-config.js   # Firebase configuration template
├── firebase.json            # Firebase hosting configuration
├── .firebaserc              # Firebase project configuration
├── package.json             # NPM configuration
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🚀 Deployment

### Prerequisites

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)

3. Update `.firebaserc` with your project ID

### Deploy to Firebase

```bash
# Login to Firebase (first time only)
firebase login

# Deploy the site
firebase deploy

# Or serve locally for testing
firebase serve
```

Your site will be live at: `https://dream-center-mhs.web.app`

## 📄 Pages

### Home (`index.html`)
- Welcome hero section
- About the Dream Center
- Operating hours
- Services overview
- Facilities preview
- Call-to-action buttons

### Visit (`visit.html`)
- Access methods (teachers, students, clubs, external groups)
- Hours and location information
- Frequently asked questions
- Booking instructions

### Services (`services.html`)
- Express 3D & Poster Printing
- Vinyl & Laser Cutting Services
- Dream Center Library
- Chromebook Help & Support
- Cosmic Cafe
- Peer Tutoring
- Service request process

### Ideas & How-To (`ideas.html`)
- Beginner tutorials for 6 maker technologies
- Advanced technique guides
- Tips, tricks & inspiration
- Resource library
- 25 3D printing project ideas

## 🎨 Customization

### Colors
Edit the CSS variables in `public/styles.css`:
```css
:root {
  --mason-green: #00703C;
  --mason-light-green: #00A651;
  --mason-gold: #C6AE58;
  /* ... other colors ... */
}
```

### Content
Edit the HTML files directly:
- `index.html` - Main content and sections
- `visit.html` - Visit information and FAQs
- `services.html` - Service descriptions
- `ideas.html` - Tutorials and guides

### Logo/Icon
The site uses emoji and CSS gradients. To customize:
1. Change the logo text in the `<div class="logo-icon">D</div>` element
2. Update the favicon SVG in the `<head>` of each HTML file

## 🔐 Authentication

The Firebase configuration is prepared for anonymous authentication. To enable interactive features:

1. Update `firebase-config.js` with your actual Firebase credentials
2. Add to any page that needs auth:
   ```html
   <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"></script>
   <script src="firebase-config.js"></script>
   <script>
     firebase.initializeApp(firebaseConfig);
     firebase.auth().signInAnonymously();
   </script>
   ```

## 📱 Responsive Design

- **Desktop**: Full-width layout with multi-column grids
- **Tablet**: Optimized for medium screens
- **Mobile**: Single-column layout with touch-friendly buttons

## 🛠️ Development

### Local Testing
```bash
firebase serve
```
Then visit `http://localhost:5000`

### File Structure Best Practices
- Keep all assets in `public/` directory
- CSS is bundled in `styles.css`
- JavaScript is inline in HTML files for simplicity
- No external CDN dependencies (all CSS variables and functions are self-contained)

## 🔄 Updates

To update content:
1. Edit the relevant HTML file in `public/`
2. Test locally: `firebase serve`
3. Deploy: `firebase deploy`
