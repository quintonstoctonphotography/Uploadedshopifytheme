
// Drawer Navigation
const hamburger = document.querySelector('.hamburger');
const drawerNav = document.getElementById('drawerNav');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');
const drawerLinks = document.querySelectorAll('.drawer-links a');

// Open drawer
hamburger.addEventListener('click', () => {
    drawerNav.classList.add('active');
    drawerOverlay.classList.add('active');
});

// Close drawer
function closeDrawer() {
    drawerNav.classList.remove('active');
    drawerOverlay.classList.remove('active');
}

drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

// Close drawer when clicking a link
drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeDrawer();
    });
});

// Carousel Functionality
function initCarousel(trackId, prevBtnId, nextBtnId) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentScroll = 0;
    const itemWidth = track.querySelector('.carousel-item').offsetWidth;
    const gap = 32; // 2rem gap
    const scrollAmount = itemWidth + gap;
    const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
    
    function updateButtons() {
        prevBtn.disabled = currentScroll <= 0;
        nextBtn.disabled = currentScroll >= maxScroll;
        prevBtn.style.opacity = currentScroll <= 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentScroll >= maxScroll ? '0.5' : '1';
    }
    
    prevBtn.addEventListener('click', () => {
        currentScroll = Math.max(0, currentScroll - scrollAmount);
        track.style.transform = `translateX(-${currentScroll}px)`;
        updateButtons();
    });
    
    nextBtn.addEventListener('click', () => {
        currentScroll = Math.min(maxScroll, currentScroll + scrollAmount);
        track.style.transform = `translateX(-${currentScroll}px)`;
        updateButtons();
    });
    
    updateButtons();
}

// Initialize all carousels
initCarousel('merchTrack', 'merchPrev', 'merchNext');
initCarousel('serviceTrack', 'servicePrev', 'serviceNext');
initCarousel('presetTrack', 'presetPrev', 'presetNext');

// Recalculate on window resize
window.addEventListener('resize', () => {
    initCarousel('merchTrack', 'merchPrev', 'merchNext');
    initCarousel('serviceTrack', 'servicePrev', 'serviceNext');
    initCarousel('presetTrack', 'presetPrev', 'presetNext');
});

// Performance: Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
});

// Security: Prevent inline script execution
document.addEventListener('DOMContentLoaded', () => {
    // Sanitize user input if forms exist
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                // Remove any script-like content
                if (input.value.includes('<script') || input.value.includes('javascript:')) {
                    e.preventDefault();
                    alert('Invalid input detected');
                }
            });
        });
    });
});
