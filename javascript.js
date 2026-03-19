document.querySelectorAll('.btn-detalle').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        alert('¡Gracias por tu interés en esta prótesis! Te llevaremos a la sección de contacto para agendar tu cita.');
        
        setTimeout(function() {
            window.location.href = btn.getAttribute('href');
        }, 1000);
    });
});



let bandera = false;

document.querySelector('a[href="#darkmode"]').addEventListener('click', function(e){
    e.preventDefault(); 


    const secciones = document.querySelectorAll('header, main, section:not(#contacto)');
    const cajitas = document.querySelectorAll('.card');
    const header = document.querySelector('nav'); 
    const titulos = document.querySelectorAll('h1, h2, h3, h4, h5, p:not(#contacto p), li, .text-muted:not(#contacto .text-muted), .nav-link, .navbar-brand');

    if (bandera){
       
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#333333";
        
        if (header) header.style.backgroundColor = "#ffffff";
        
        secciones.forEach(function(seccion) {
            seccion.style.backgroundColor = ""; 
        });

        cajitas.forEach(function(caja) {
            caja.style.backgroundColor = "#ffffff";
            caja.style.borderColor = "#D0F2F2";
        });

        titulos.forEach(function(texto) {
            texto.style.removeProperty('color');
            if (texto.classList.contains('nav-link') || texto.tagName.startsWith('H')) {
                texto.style.color = "#007A7A";
            }
        });

    } else {
        



        document.body.style.backgroundColor = "#021616";
        document.body.style.color = "#B2EBF2";
        
        if (header) header.style.backgroundColor = "#001212";
        
        secciones.forEach(function(seccion) {
            seccion.style.backgroundColor = "#021616"; 
        });

        cajitas.forEach(function(caja) {
            caja.style.backgroundColor = "#002626";
            caja.style.borderColor = "#005C5C";
        });

        titulos.forEach(function(texto) {
            texto.style.setProperty('color', '#B2EBF2', 'important');
        });
    }

    bandera = !bandera;
});

