# Ambatukam BioLink 😋

A stylish, modern bio link page with glassmorphism effects, dark/light theme toggle, and animated elements. Perfect for social media profiles or personal websites.

![Preview](https://files.catbox.moe/a7edjh.jpg)

## Features ✨

- 🌓 Dark/Light theme toggle with localStorage persistence
- 🪟 Glassmorphism UI design with blur effects
- 🎨 Gradient accents and animations
- 🔗 Customizable links and social media buttons
- ✨ Floating particle background effect
- 📱 Fully responsive design
- ⚡ Fast loading with minimal dependencies

## Fork Information 🛠️

This project is forked from:  
[VynaaValerie/Biolink-Premium-6](https://github.com/VynaaValerie/Biolink-Premium-6.git)

## Installation & Setup 🚀

### 1. Vercel Deployment (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fyourrepository)

1. Click the "Deploy with Vercel" button above
2. Follow Vercel's deployment wizard
3. Your bio link page will be live in minutes!

### 2. Local Development

```bash
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
```

Just open `index.html` in your browser - no build step required!

### 3. Termux (Android)

```bash
pkg install git -y
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
python -m http.server 8000
```

Then open `http://localhost:8000` in your mobile browser.

## Configuration ⚙️

Edit `vynaa.js` to customize:

```javascript
const profileConfig = {
    name: "Ambatukam", // Your name
    bio: "suka rodok rodok 😋", // Your bio
    avatar: "https://files.catbox.moe/iwk5xc.jpg", // Your profile image
    copyright: "Ambatukam", // Footer text

    // Links configuration
    links: [
        {
            title: "Join Group",
            description: "Connect with our community",
            icon: "fas fa-users",
            url: "https://t.me/yourgroup",
            type: "direct" // or "prompt"
        },
        // Add more links as needed
    ],

    // Social links configuration
    socialLinks: [
        {
            platform: "Instagram",
            icon: "fab fa-instagram",
            url: "https://instagram.com/yourusername",
            type: "direct"
        },
        // Add more social links as needed
    ]
};
```

## Customization Options 🎨

- **Colors**: Edit the CSS variables in `style.css` under `:root` and `[data-theme="light"]`
- **Animations**: Adjust or add new animations in the `@keyframes` section
- **Particles**: Modify particle count and behavior in the JavaScript section of `index.html`

## Technologies Used 💻

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- SweetAlert2 (for prompt dialogs)

## Troubleshooting 🛠️

**Theme not saving?**
- Ensure localStorage is enabled in your browser
- Clear site data and refresh if issues persist

**Particles not showing?**
- Check if JavaScript is enabled
- Some ad blockers may interfere with the particle effect

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name]  
Inspired by Ambatukam 😋