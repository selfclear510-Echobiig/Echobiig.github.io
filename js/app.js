document.addEventListener('DOMContentLoaded', function() {
    // Carousel Functionality
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[n].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
        });

        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
        });

        // Initialize the carousel
        showSlide(currentSlide);

        // Optional: Autoplay the carousel
        // setInterval(nextSlide, 5000);
    }

    // Back to Top Button Functionality
    const backToTopBtn = document.getElementById("backToTopBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');

            // Reset error messages
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';

            let isValid = true;

            if (!nameInput.value.trim()) {
                nameError.textContent = 'Por favor, introduce tu nombre.';
                isValid = false;
            }

            if (!emailInput.value.trim()) {
                emailError.textContent = 'Por favor, introduce tu correo electrónico.';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                messageError.textContent = 'Por favor, introduce tu mensaje.';
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission
                alert('Formulario enviado correctamente!');
                contactForm.reset();
            }
        });

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }
});
