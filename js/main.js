// 1. Redireccionar de Bienvenida a Inicio después de 5 segundos
// Comprueba si estamos en la página de Bienvenida (index.html o en la raíz del proyecto)
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname.endsWith('detalle/')) {
    setTimeout(function() {
        window.location.href = 'pantallas/inicio.html';
    }, 5000); // 5000 milisegundos = 5 segundos
}

// 2. Desactivar el clic en las tarjetas de "Próximamente"
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces de las tarjetas
    const linksCartas = document.querySelectorAll('.card-link, a');

    linksCartas.forEach(link => {
        // Si el enlace contiene "Proximamente" o "Próximamente" en su texto o su href es "#"
        if (link.innerText.includes('Proximamente') || link.innerText.includes('Próximamente') || link.getAttribute('href') === '#') {
            
            // Cambia el cursor a "no permitido" para dar la pista visual
            link.style.cursor = 'not-allowed';
            
            // Cancela el evento de clic
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Evita que abra la página
            });
        }
    });
});