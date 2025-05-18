// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (navLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        body.style.overflow = '';
    }
});

// Mobile dropdown toggle
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle('active');
            
            // Close other open dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== this && otherDropdown.classList.contains('active')) {
                    otherDropdown.classList.remove('active');
                }
            });
        }
    });
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fix for iOS vh units
function setMobileHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setMobileHeight();
window.addEventListener('resize', setMobileHeight); 