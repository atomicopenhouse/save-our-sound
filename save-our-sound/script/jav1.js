// Main JavaScript for Save Our Sound <!--testing for github-->
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.display = 'none';

    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        document.querySelector('.navbar .container').appendChild(mobileMenuBtn);

        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

        // Check window size and adjust menu
        function checkWindowSize() {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = 'block';
                navLinks.style.display = 'none';
                navLinks.style.flexDirection = 'column';
                navLinks.style.width = '100%';
            } else {
                mobileMenuBtn.style.display = 'none';
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'row';
            }
        }

        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
    }

    // Smooth scrolling for anchor links
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

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Record search functionality
    const searchInput = document.getElementById('recordSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const recordCards = document.querySelectorAll('.record-card');

            recordCards.forEach(card => {
                const title = card.querySelector('h4').textContent.toLowerCase();
                const artist = card.querySelector('.artist').textContent.toLowerCase();

                if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Image lazy loading
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
});