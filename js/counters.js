/* 🔢 MOTION MASTER AGENT — COUNTER SYSTEM */

document.addEventListener('DOMContentLoaded', () => {

    const statNumbers = document.querySelectorAll('.stat-item__number');
    
    if (statNumbers.length > 0) {
        gsap.registerPlugin(ScrollTrigger);

        statNumbers.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const suffix = stat.getAttribute('data-suffix') || '';
            const isFloat = stat.getAttribute('data-float') === 'true';

            // Initial value set to 0
            stat.innerText = '0' + suffix;

            ScrollTrigger.create({
                trigger: stat,
                start: "top 90%", // Trigger when 90% from top
                onEnter: () => {
                    gsap.to({ count: 0 }, {
                        count: target,
                        duration: 3,
                        ease: "power2.out",
                        onUpdate: function() {
                            const current = isFloat ? this.targets()[0].count.toFixed(1) : Math.floor(this.targets()[0].count);
                            stat.innerText = current + suffix;
                        }
                    });
                },
                once: true // Animation happens only once
            });
        });
    }
});
