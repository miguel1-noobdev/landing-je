/* 🧭 CORE UI INTERACTOR — NAVIGATION & BASE EFFECTS */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });
        
        // Close menu on link click
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // 2. Header hide on scroll down, show on scroll up
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
            
            if (currentScrollY > lastScrollY) {
                // Scrolling down -> hide
                header.classList.add('hidden');
            } else {
                // Scrolling up -> show
                header.classList.remove('hidden');
            }
        } else {
            header.classList.remove('scrolled', 'hidden');
        }
        
        lastScrollY = currentScrollY;
    });

    // 3. Simple Form Submission simulation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Enviando...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerText = '¡Mensaje Enviado! ✨';
                btn.style.backgroundColor = 'var(--clr-accent)';
                btn.style.color = '#fff';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    }

    // 4. Parallax Hero Video (Smooth Tilt)
    const heroVisual = document.querySelector('.hero__visual');
    if (heroVisual && !window.matchMedia('(max-width: 900px)').matches) {
        heroVisual.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const xOffset = (clientX / window.innerWidth - 0.5) * 20;
            const yOffset = (clientY / window.innerHeight - 0.5) * 20;
            
            const heroVideo = heroVisual.querySelector('.hero__video');
            gsap.to(heroVideo, {
                rotateY: xOffset,
                rotateX: -yOffset,
                duration: 1,
                ease: "power2.out"
            });
        });

        heroVisual.addEventListener('mouseleave', () => {
            const heroVideo = heroVisual.querySelector('.hero__video');
            gsap.to(heroVideo, {
                rotateY: -5,
                rotateX: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)"
            });
        });
    }

    // 5. IntersectionObserver — Pausar video cuando no está visible
    const heroVideo = document.querySelector('.hero__video');
    if (heroVideo && 'IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play().catch(() => {});
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.1 });
        
        videoObserver.observe(heroVideo);
    }

    // 6. Gallery 3D Coverflow Carousel
    const track = document.querySelector('.gallery__track');
    const slides = document.querySelectorAll('.gallery__slide');
    const prevBtn = document.querySelector('.gallery__arrow--prev');
    const nextBtn = document.querySelector('.gallery__arrow--next');
    
    if (track && slides.length > 0) {
        let currentIndex = 0;
        
        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev', 'next', 'far');
                
                const diff = index - currentIndex;
                
                if (diff === 0) {
                    slide.classList.add('active');
                } else if (diff === -1 || (currentIndex === 0 && index === slides.length - 1)) {
                    slide.classList.add('prev');
                } else if (diff === 1 || (currentIndex === slides.length - 1 && index === 0)) {
                    slide.classList.add('next');
                } else {
                    slide.classList.add('far');
                }
            });
        }
        
        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            currentIndex = index;
            updateCarousel();
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
        }
        
        // Click on side slides to center them
        slides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                if (index !== currentIndex) {
                    goToSlide(index);
                }
            });
        });
        
        // Drag support
        let isDragging = false;
        let startX = 0;
        let dragThreshold = 50;
        
        track.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
        });
        
        track.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        track.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const diff = e.clientX - startX;
            if (Math.abs(diff) > dragThreshold) {
                if (diff > 0) {
                    goToSlide(currentIndex - 1);
                } else {
                    goToSlide(currentIndex + 1);
                }
            }
        });
        
        track.addEventListener('mouseleave', () => {
            isDragging = false;
        });
        
        // Touch support
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        track.addEventListener('touchend', (e) => {
            const diff = e.changedTouches[0].clientX - startX;
            if (Math.abs(diff) > dragThreshold) {
                if (diff > 0) {
                    goToSlide(currentIndex - 1);
                } else {
                    goToSlide(currentIndex + 1);
                }
            }
        }, { passive: true });
        
        // Initialize
        updateCarousel();
    }

    // 7. Mobile Bottom Navigation — Active state on scroll
    const mobileNavItems = document.querySelectorAll('.mobile-nav__item');
    const sections = document.querySelectorAll('section[id]');
    
    if (mobileNavItems.length > 0 && sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    mobileNavItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === `#${id}`) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
});
