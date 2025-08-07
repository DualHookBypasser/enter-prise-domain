
// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.domain-card, .tool-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add click tracking for analytics
    const buttons = document.querySelectorAll('.domain-btn, .tool-btn, .subtitle-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            console.log('Button clicked:', this.textContent);
        });
    });

    // Add particle effect on hover
    const domainCards = document.querySelectorAll('.domain-card');
    domainCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            createParticles(this);
        });
    });
});

// Create particle effect
function createParticles(element) {
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#ff0000';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        
        document.body.appendChild(particle);
        
        // Animate particle
        particle.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: 'translateY(-50px)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.tagName === 'A') {
        e.target.click();
    }
});

// Add status indicator
function addStatusIndicator() {
    const statusDiv = document.createElement('div');
    statusDiv.style.position = 'fixed';
    statusDiv.style.top = '10px';
    statusDiv.style.right = '10px';
    statusDiv.style.padding = '5px 10px';
    statusDiv.style.background = 'rgba(0, 255, 0, 0.2)';
    statusDiv.style.border = '1px solid #00ff00';
    statusDiv.style.borderRadius = '5px';
    statusDiv.style.fontSize = '12px';
    statusDiv.style.color = '#00ff00';
    statusDiv.textContent = '● ONLINE';
    statusDiv.style.zIndex = '9999';
    
    document.body.appendChild(statusDiv);
}

// Initialize status indicator
addStatusIndicator();

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
