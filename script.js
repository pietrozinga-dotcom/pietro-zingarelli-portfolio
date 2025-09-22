// Modern Minimal Portfolio - Pietro Zingarelli
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all animations and features
    initScrollAnimations();
    initScrollToTop();
    initSmoothScrolling();
    initTypingEffect();
    initSkillAnimations();
    initParallaxEffect();
    initContactAnimations();
    initModernInteractions();
    initProgressBars();
    initDownloadCV();
    initProjectCards();
    
    // Add loading animation to profile picture
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        profileImg.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        // Set initial styles for loading animation
        profileImg.style.opacity = '0';
        profileImg.style.transform = 'scale(0.8)';
        profileImg.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }
});

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.section-title, .contact-item, .education-item, .training-item, .skill-category, .language-item, .about-text');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Special animations for left and right columns
    const leftColumnElements = document.querySelectorAll('.left-column .section-title, .left-column .contact-item, .left-column .skill-category, .left-column .language-item, .left-column .about-text');
    leftColumnElements.forEach((el, index) => {
        el.classList.remove('fade-in');
        el.classList.add('slide-in-left');
        el.style.animationDelay = `${index * 0.15}s`;
    });

    const rightColumnElements = document.querySelectorAll('.right-column .section-title, .right-column .education-item, .right-column .training-item');
    rightColumnElements.forEach((el, index) => {
        el.classList.remove('fade-in');
        el.classList.add('slide-in-right');
        el.style.animationDelay = `${index * 0.15}s`;
    });
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scrolling for internal links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Typing Effect for Main Title
function initTypingEffect() {
    const mainTitle = document.querySelector('.main-title');
    if (!mainTitle) return;
    
    const text = mainTitle.textContent;
    mainTitle.textContent = '';
    mainTitle.style.borderRight = '2px solid #3498db';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            mainTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                mainTitle.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Skill Tags Animation
function initSkillAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.4)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 10px rgba(52, 152, 219, 0.3)';
        });
        
        // Add staggered animation on load
        setTimeout(() => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            tag.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, index * 50);
        }, 1000);
    });
}

// Parallax Effect for Background
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.main-title');
        
        parallaxElements.forEach(element => {
            const speed = 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Contact Items Hover Effects
function initContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.backgroundColor = '#f8f9fa';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.backgroundColor = 'white';
        });
    });
}

// Add loading states and micro-interactions
function addMicroInteractions() {
    // Button hover effects
    const buttons = document.querySelectorAll('button, .skill-tag, .contact-item');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.education-item, .training-item, .skill-category');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
}

// Initialize micro-interactions
addMicroInteractions();

// Add scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #3498db, #e74c3c);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
initScrollProgress();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to scroll to top
    if (e.key === 'Escape') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Space key to scroll down
    if (e.key === ' ' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: 'smooth'
        });
    }
});

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - scroll down
            window.scrollBy({
                top: window.innerHeight * 0.5,
                behavior: 'smooth'
            });
        } else {
            // Swipe down - scroll up
            window.scrollBy({
                top: -window.innerHeight * 0.5,
                behavior: 'smooth'
            });
        }
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add print styles support
window.addEventListener('beforeprint', function() {
    // Hide interactive elements when printing
    const interactiveElements = document.querySelectorAll('.scroll-top, button');
    interactiveElements.forEach(el => el.style.display = 'none');
});

window.addEventListener('afterprint', function() {
    // Show interactive elements after printing
    const interactiveElements = document.querySelectorAll('.scroll-top, button');
    interactiveElements.forEach(el => el.style.display = '');
});

// Modern Interactions
function initModernInteractions() {
    // Add subtle hover effects to cards
    const cards = document.querySelectorAll('.education-item, .training-item, .skill-category');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
            // Add subtle glow effect
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.contact-item, .skill-tag');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(0, 123, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add floating animation to profile picture
    const profilePicture = document.querySelector('.profile-picture');
    if (profilePicture) {
        let floatDirection = 1;
        setInterval(() => {
            if (profilePicture.matches(':hover')) return;
            
            floatDirection *= -1;
            profilePicture.style.transform = `translateY(${floatDirection * 2}px)`;
        }, 3000);
    }
    
    // Add typewriter effect to section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        title.style.animation = 'typewriter 0.8s ease-in-out';
                    }, index * 200);
                }
            });
        });
        observer.observe(title);
    });
    
    // Add CSS for typewriter animation
    const typewriterStyle = document.createElement('style');
    typewriterStyle.textContent = `
        @keyframes typewriter {
            from {
                width: 0;
                border-right: 2px solid #007bff;
            }
            to {
                width: 100%;
                border-right: 2px solid transparent;
            }
        }
    `;
    document.head.appendChild(typewriterStyle);
}

// Console welcome message
console.log(`
🎉 Benvenuto nel Portfolio Moderno di Pietro Zingarelli!
📧 pietro.zinga@gmail.com
🔗 https://www.linkedin.com/in/pietro-zingarelli-2022031aa/
💻 Design minimal e moderno
`);

// Progress Bars Animation
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                setTimeout(() => {
                    entry.target.style.width = width + '%';
                }, 500);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Download CV Functionality
function initDownloadCV() {
    const downloadBtn = document.getElementById('downloadCV');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show download animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Show message for now
            alert('CV PDF sarà disponibile presto! Per ora puoi contattarmi direttamente.');
        });
    }
}

// Project Cards Interactions
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add tilt effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
        
        // Add click animation
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Project links functionality
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(0, 123, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Show coming soon message
            alert('Progetto in arrivo! Contattami per maggiori dettagli.');
        });
    });
}

// Enhanced Timeline Animation
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(50px)';
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(item);
    });
}

// Enhanced Testimonial Animation
function initTestimonialAnimation() {
    const testimonialCard = document.querySelector('.testimonial-card');
    
    if (testimonialCard) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.3 });
        
        testimonialCard.style.opacity = '0';
        testimonialCard.style.transform = 'translateY(30px)';
        testimonialCard.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(testimonialCard);
    }
}

// Initialize additional animations
initTimelineAnimation();
initTestimonialAnimation();

// Add error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Immagine non trovata:', e.target.src);
    }
}, true);
