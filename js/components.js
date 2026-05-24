// Efectos 3D y animaciones en tarjetas
(function(){
    document.addEventListener('DOMContentLoaded', function(){
        // Añadir clase card-3d a tarjetas de servicio y testimonios
        document.querySelectorAll('.service-card, .testimonial-card, .gallery__item').forEach(el=>{
            el.classList.add('card-3d');
        });
    });
})();
