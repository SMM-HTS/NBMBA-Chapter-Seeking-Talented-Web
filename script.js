        document.addEventListener('DOMContentLoaded', function () {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            const header = document.getElementById('header');

            mobileMenuBtn.addEventListener('click', function () {
                navLinks.classList.toggle('active');
                this.innerHTML = navLinks.classList.contains('active') ?
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            window.addEventListener('scroll', function () {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');

            if (contactForm) {
                contactForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;

                    if (name && email && message) {
                        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                        formMessage.classList.remove('error');
                        formMessage.classList.add('success');
                        formMessage.style.display = 'block';

                        contactForm.reset();

                        setTimeout(() => {
                            formMessage.style.display = 'none';
                        }, 5000);
                    } else {
                        formMessage.textContent = 'Please fill in all required fields.';
                        formMessage.classList.remove('success');
                        formMessage.classList.add('error');
                        formMessage.style.display = 'block';
                    }
                });
            }

            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach(card => {
                card.addEventListener('mouseenter', function () {
                    this.querySelector('.feature-icon').style.transform = 'scale(1.1)';
                });

                card.addEventListener('mouseleave', function () {
                    this.querySelector('.feature-icon').style.transform = 'scale(1)';
                });
            });

            const testimonialCards = document.querySelectorAll('.testimonial');
            testimonialCards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.feature-card, .testimonial, .about-text, .about-img, .contact-info-box, .contact-form-box').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });
