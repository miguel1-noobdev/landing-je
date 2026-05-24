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

    // 2. Sticky Header Scroll Effect (Blur & Border)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
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
});
