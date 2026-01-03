// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Show success message
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Add active state to navigation on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// Program page navigation
function navigateToProgram(programPage) {
    window.location.href = programPage;
}

// Video player placeholder (replace with actual video implementation)
function playVideo(videoId) {
    alert('Video player would open here. Video ID: ' + videoId);
}

// Enroll button handler
function handleEnroll(programName, price) {
    alert('Redirecting to checkout for: ' + programName + '\nPrice: ' + price);
}

// Watch review handler
function watchReview(reviewerName, duration) {
    alert('Opening review video for: ' + reviewerName + '\nDuration: ' + duration);
}

// Back to programs handler
function backToPrograms() {
    window.location.href = 'index.html#programs';
}

// Book consultation handler
function bookConsultation() {
    window.location.href = 'index.html#contact';
}

// Make functions available globally
window.navigateToProgram = navigateToProgram;
window.playVideo = playVideo;
window.handleEnroll = handleEnroll;
window.watchReview = watchReview;
window.backToPrograms = backToPrograms;
window.bookConsultation = bookConsultation;
