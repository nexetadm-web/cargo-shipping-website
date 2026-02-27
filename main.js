// Initialize Lucide icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    }
});

// Smooth Scrolling for Nav Links
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

// Form Submission (Simulated)
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = quoteForm.querySelector('button');
        const originalText = btn.textContent;

        btn.disabled = true;
        btn.textContent = 'Sending...';

        // Simulate API call
        setTimeout(() => {
            btn.style.backgroundColor = '#10B981'; // Success Green
            btn.textContent = 'Quote Requested Successfully!';
            quoteForm.reset();

            setTimeout(() => {
                btn.style.backgroundColor = '';
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Track Shipment Interaction
const trackForm = document.getElementById('track-form');
const trackResult = document.getElementById('track-result');

if (trackForm) {
    trackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = trackForm.querySelector('button');
        btn.disabled = true;
        btn.textContent = 'Searching...';

        setTimeout(() => {
            trackResult.classList.remove('hidden');
            btn.disabled = false;
            btn.textContent = 'Track Now';

            // Scroll to result
            trackResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1000);
    });
}

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.service-card, .step-item, .pricing-card, .contact-info, .contact-form');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    revealObserver.observe(el);
});
