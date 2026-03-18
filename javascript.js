document.querySelectorAll('.btn-detalle').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        alert('¡Gracias por tu interés en esta prótesis! Te llevaremos a la sección de contacto para agendar tu cita.');
        
        setTimeout(function() {
            window.location.href = btn.getAttribute('href');
        }, 1000);
    });
});