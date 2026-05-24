// Manejo de tema claro/oscuro y comportamiento del botón toggle
(function(){
    // Detectar preferencia del sistema
    const root = document.documentElement;
    const stored = localStorage.getItem('site-theme');
    function applyTheme(theme){
        if(theme === 'light'){
            root.classList.remove('dark');
            root.classList.add('light');
        } else {
            root.classList.remove('light');
            root.classList.add('dark');
        }
    }

    function detectAndApply(){
        if(stored){ applyTheme(stored); return; }
        const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        applyTheme(prefersLight ? 'light' : 'dark');
    }

    document.addEventListener('DOMContentLoaded', function(){
        detectAndApply();
        const btn = document.getElementById('themeToggle');
        if(!btn) return;
        btn.addEventListener('click', function(){
            const isLight = root.classList.contains('light');
            const newTheme = isLight ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('site-theme', newTheme);
        });
    });
})();

// Agentes CSS inteligentes: añadir clases a elementos para mejorar efectos 3D
(function(){
    document.addEventListener('DOMContentLoaded', function(){
        // Añadir clase card-3d a tarjetas de servicio y testimonios
        document.querySelectorAll('.service-card, .testimonial-card, .gallery__item, .contact__map-canvas').forEach(el=>{
            el.classList.add('card-3d');
            el.style.position = 'relative';
        });
        // Ajustar botones sociales
        document.querySelectorAll('.social-btn').forEach((b,i)=>{
            b.style.transition = 'transform 0.28s ease, box-shadow 0.28s ease';
            b.addEventListener('mouseenter', ()=>{ b.style.transform = 'translateY(-8px) scale(1.04)'; b.style.boxShadow = '0 18px 40px rgba(0,0,0,0.45)'; });
            b.addEventListener('mouseleave', ()=>{ b.style.transform=''; b.style.boxShadow=''; });
            // staggered floating animation
            b.style.animation = `float 4s ease-in-out ${i*0.12}s infinite`;
        });
    });
})();

/* keyframes small float */
const style = document.createElement('style');
style.innerHTML = `@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}`;
document.head.appendChild(style);
