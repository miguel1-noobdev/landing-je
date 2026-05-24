/* 🎬 MOTION MASTER AGENT — GSAP SYSTEM */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Reveal Elements (ENTRANCE ANIMATIONS)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-down, .reveal-left, .reveal-right');
    
    if (revealElements.length > 0) {
        gsap.registerPlugin(ScrollTrigger);

        revealElements.forEach(el => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 40,
                scale: 0.95
            }, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // Trigger when 85% from top of viewport
                    // end: "bottom 20%",
                    // scrub: 1, // Only if needed
                    toggleActions: "play none none none"
                },
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.out"
            });
        });
    }

    // 2. Parallax Floating Badges (Mouse interaction)
    const badges = document.querySelectorAll('.glass-badge');
    if (badges.length > 0) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const xOffset = (clientX / window.innerWidth - 0.5) * 40;
            const yOffset = (clientY / window.innerHeight - 0.5) * 40;
            
            badges.forEach((badge, index) => {
                const multiplier = (index + 1) * 0.5;
                gsap.to(badge, {
                    x: xOffset * multiplier,
                    y: yOffset * multiplier,
                    duration: 1.5,
                    ease: "power2.out"
                });
            });
        });
    }

    // 3. Staggered Service Cards
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        gsap.fromTo(serviceCards, {
            opacity: 0,
            y: 50
        }, {
            scrollTrigger: {
                trigger: '.services__grid',
                start: "top 75%"
            },
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out"
        });
    }
});
