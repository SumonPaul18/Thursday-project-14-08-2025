// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize navbar scroll effect
    initNavbarScrollEffect();
    
    // Initialize animations on scroll
    initScrollAnimations();
    
    // Initialize tech logo hover effects
    initTechLogoEffects();
});

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile navbar if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });
}

/**
 * Initialize contact form functionality
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Validate form
            if (validateForm(formObject)) {
                // Show loading state
                showFormLoading(true);
                
                // Simulate form submission (replace with actual backend call)
                setTimeout(() => {
                    handleFormSubmission(formObject);
                }, 2000);
            }
        });
    }
}

/**
 * Validate contact form
 */
function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.subject || data.subject.trim().length < 5) {
        errors.push('Subject must be at least 5 characters long');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    if (errors.length > 0) {
        showFormErrors(errors);
        return false;
    }
    
    return true;
}

/**
 * Check if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show form loading state
 */
function showFormLoading(isLoading) {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    
    if (isLoading) {
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitButton.disabled = true;
    } else {
        submitButton.innerHTML = 'Send Message';
        submitButton.disabled = false;
    }
}

/**
 * Handle form submission
 * Note: This is a client-side simulation. In a real application, you would:
 * 1. Send data to a backend server
 * 2. Use environment variables for API keys/credentials
 * 3. Implement proper error handling
 */
function handleFormSubmission(data) {
    // Simulate API call
    // In production, replace this with actual backend integration:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            showFormSuccess();
        } else {
            showFormErrors(['Failed to send message. Please try again.']);
        }
    })
    .catch(error => {
        showFormErrors(['Network error. Please try again later.']);
    })
    .finally(() => {
        showFormLoading(false);
    });
    */
    
    // For demo purposes, always show success
    showFormLoading(false);
    showFormSuccess();
    
    console.log('Form data that would be sent to backend:', data);
    console.log('Note: Implement backend integration with proper environment variable handling for production use');
}

/**
 * Show form success message
 */
function showFormSuccess() {
    const form = document.getElementById('contactForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success mt-3';
    successMessage.innerHTML = '<i class="fas fa-check-circle me-2"></i>Thank you! Your message has been sent successfully.';
    
    // Remove any existing messages
    const existingMessages = form.parentNode.querySelectorAll('.alert');
    existingMessages.forEach(msg => msg.remove());
    
    // Add success message
    form.parentNode.appendChild(successMessage);
    
    // Reset form
    form.reset();
    
    // Remove message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

/**
 * Show form errors
 */
function showFormErrors(errors) {
    const form = document.getElementById('contactForm');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'alert alert-danger mt-3';
    
    let errorHtml = '<i class="fas fa-exclamation-triangle me-2"></i>';
    if (errors.length === 1) {
        errorHtml += errors[0];
    } else {
        errorHtml += 'Please fix the following errors:<ul class="mb-0 mt-2">';
        errors.forEach(error => {
            errorHtml += `<li>${error}</li>`;
        });
        errorHtml += '</ul>';
    }
    
    errorMessage.innerHTML = errorHtml;
    
    // Remove any existing messages
    const existingMessages = form.parentNode.querySelectorAll('.alert');
    existingMessages.forEach(msg => msg.remove());
    
    // Add error message
    form.parentNode.appendChild(errorMessage);
    
    // Remove message after 8 seconds
    setTimeout(() => {
        errorMessage.remove();
    }, 8000);
}

/**
 * Initialize navbar scroll effect
 */
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(52, 58, 64, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'rgba(52, 58, 64, 0.9)';
            navbar.style.backdropFilter = 'blur(5px)';
        }
    });
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.skill-category, .project-card, .blog-card, .timeline-item, .certification-item, .education-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

/**
 * Initialize tech logo hover effects
 */
function initTechLogoEffects() {
    const techLogos = document.querySelectorAll('.orbit-item');
    
    techLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            // Pause animation on hover
            this.style.animationPlayState = 'paused';
        });
        
        logo.addEventListener('mouseleave', function() {
            // Resume animation
            this.style.animationPlayState = 'running';
        });
        
        // Add click event for tech logos
        logo.addEventListener('click', function() {
            const techName = this.querySelector('img').alt;
            showTechInfo(techName);
        });
    });
}

/**
 * Show tech information (optional feature)
 */
function showTechInfo(techName) {
    const techInfo = {
        'AWS': 'Amazon Web Services - Cloud computing platform',
        'GCP': 'Google Cloud Platform - Cloud computing services',
        'Kubernetes': 'Container orchestration platform',
        'Docker': 'Containerization platform',
        'Jenkins': 'Continuous integration and deployment tool',
        'Git': 'Version control system',
        'Python': 'Programming language for automation and scripting',
        'Linux': 'Open-source operating system'
    };
    
    const info = techInfo[techName] || `${techName} - DevOps Technology`;
    
    // Create tooltip or modal (simple implementation)
    const tooltip = document.createElement('div');
    tooltip.className = 'tech-tooltip';
    tooltip.innerHTML = `<strong>${techName}</strong><br>${info}`;
    tooltip.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1000;
        font-size: 14px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(tooltip);
    
    // Remove tooltip after 3 seconds
    setTimeout(() => {
        tooltip.remove();
    }, 3000);
}

/**
 * Utility function to debounce scroll events
 */
function debounce(func, wait) {
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

/**
 * Initialize active navigation highlighting
 */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    const highlightNavigation = debounce(() => {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 100);
    
    window.addEventListener('scroll', highlightNavigation);
}

// Initialize active navigation on load
document.addEventListener('DOMContentLoaded', function() {
    initActiveNavigation();
});

/**
 * Add typing effect to hero section (optional enhancement)
 */
function initTypingEffect() {
    const typingElement = document.querySelector('.hero-content h2');
    if (typingElement) {
        const originalText = typingElement.textContent;
        const roles = ['DevOps Engineer', 'Cloud Architect', 'Automation Expert', 'Infrastructure Specialist'];
        let currentRoleIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentRole = roles[currentRoleIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, currentCharIndex - 1);
                currentCharIndex--;
            } else {
                typingElement.textContent = currentRole.substring(0, currentCharIndex + 1);
                currentCharIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && currentCharIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before next word
            }
            
            setTimeout(typeEffect, typeSpeed);
        }
        
        // Start typing effect after a delay
        setTimeout(typeEffect, 1000);
    }
}

// Uncomment the line below to enable typing effect
// document.addEventListener('DOMContentLoaded', initTypingEffect);

/**
 * Performance optimization: Lazy load images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelectorAll('img[data-src]').length > 0) {
        initLazyLoading();
    }
});

/**
 * Add CSS class for active navigation items
 */
const style = document.createElement('style');
style.textContent = `
    .navbar-nav .nav-link.active {
        color: #007bff !important;
        font-weight: 600;
    }
    
    .navbar-nav .nav-link.active::after {
        width: 100%;
    }
    
    .tech-tooltip {
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
`;
document.head.appendChild(style);

// Export functions for potential external use
window.portfolioJS = {
    initSmoothScrolling,
    initContactForm,
    initNavbarScrollEffect,
    initScrollAnimations,
    initTechLogoEffects,
    initActiveNavigation,
    initTypingEffect,
    initLazyLoading
};
