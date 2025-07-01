// Profile Configuration
const profileConfig = {
    name: "Ambatukam",
    bio: "suka rodok rodok 😋",
    avatar: "https://files.catbox.moe/iwk5xc.jpg",
    copyright: "Ambatukam",
    
    // Links configuration
    links: [
        {
            title: "Join Group",
            description: "Connect with our community",
            icon: "fas fa-users",
            url: "https://t.me/yourgroup",
            type: "direct" // or "prompt" if you want the prompt behavior
        },
        {
            title: "Join Channel",
            description: "Get the latest updates",
            icon: "fas fa-bullhorn",
            url: "https://t.me/yourchannel",
            type: "direct"
        },
        {
            title: "YouTube",
            description: "Watch my videos",
            icon: "fab fa-youtube",
            url: "https://youtube.com/yourchannel",
            type: "direct"
        },
        {
            title: "Contact",
            description: "Get in touch with me",
            icon: "fas fa-envelope",
            url: "mailto:youremail@example.com",
            type: "direct"
        }
    ],
    
    // Social links configuration
    socialLinks: [
        {
            platform: "Instagram",
            icon: "fab fa-instagram",
            url: "https://instagram.com/yourusername",
            type: "direct"
        },
        {
            platform: "Twitter",
            icon: "fab fa-twitter",
            url: "https://twitter.com/yourusername",
            type: "direct"
        },
        {
            platform: "TikTok",
            icon: "fab fa-tiktok",
            url: "https://tiktok.com/@yourusername",
            type: "direct"
        },
        {
            platform: "Telegram",
            icon: "fab fa-telegram",
            url: "https://t.me/yourusername",
            type: "direct"
        }
    ]
};

// Initialize the page with the configuration
document.addEventListener('DOMContentLoaded', function() {
    // Set profile information
    document.getElementById('profileName').textContent = profileConfig.name;
    document.getElementById('profileBio').textContent = profileConfig.bio;
    document.getElementById('profileImage').src = profileConfig.avatar;
    document.getElementById('copyrightName').textContent = profileConfig.copyright;
    
    // Generate links
    const linkContainer = document.getElementById('linkContainer');
    profileConfig.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-card';
        
        if (link.type === 'prompt') {
            linkElement.addEventListener('click', function(e) {
                e.preventDefault();
                openLinkPrompt(link.title, link.description);
            });
        }
        
        linkElement.innerHTML = `
            <div class="link-icon">
                <i class="${link.icon}"></i>
            </div>
            <div class="link-content">
                <div class="link-title">${link.title}</div>
                <div class="link-description">${link.description}</div>
            </div>
            <i class="fas fa-chevron-right link-arrow"></i>
        `;
        
        linkContainer.appendChild(linkElement);
    });
    
    // Generate social links
    const socialContainer = document.getElementById('socialContainer');
    profileConfig.socialLinks.forEach(social => {
        const socialElement = document.createElement('a');
        socialElement.href = social.url;
        socialElement.className = 'social-link';
        
        if (social.type === 'prompt') {
            socialElement.addEventListener('click', function(e) {
                e.preventDefault();
                openSocialPrompt(social.platform, social.url);
            });
        }
        
        socialElement.innerHTML = `<i class="${social.icon}"></i>`;
        socialContainer.appendChild(socialElement);
    });
});

function openLinkPrompt(title, description) {
    Swal.fire({
        title: title,
        input: 'url',
        inputLabel: `Enter ${title} URL`,
        inputPlaceholder: `https://example.com/yourlink`,
        showCancelButton: true,
        confirmButtonText: 'Open',
        confirmButtonColor: 'var(--primary-color)',
        background: 'var(--card-bg)',
        color: 'var(--text-color)',
        backdrop: 'rgba(0,0,0,0.7)'
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            window.open(result.value, '_blank');
        }
    });
}

function openSocialPrompt(platform, baseUrl) {
    Swal.fire({
        title: `${platform} Profile`,
        input: 'text',
        inputLabel: `Enter your ${platform} username`,
        inputPlaceholder: `yourusername`,
        showCancelButton: true,
        confirmButtonText: 'Open',
        confirmButtonColor: 'var(--primary-color)',
        background: 'var(--card-bg)',
        color: 'var(--text-color)',
        backdrop: 'rgba(0,0,0,0.7)'
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            window.open(`${baseUrl}${result.value}`, '_blank');
        }
    });
}