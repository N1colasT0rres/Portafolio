document.addEventListener("DOMContentLoaded", function() {
    // Obtén el elemento al que deseas desplazarte
    var sobreMiSection = document.getElementById("sobre-mi");

    // Agrega un event listener para el evento de desplazamiento de la ventana
    window.addEventListener("scroll", function() {
        // Obtén la posición del scroll vertical
        var scrollPosition = window.scrollY || window.pageYOffset;

        // Verifica si el usuario ha desplazado lo suficiente hacia abajo
        if (scrollPosition > 50) { // Cambia 50 al número de píxeles que desees
            // Realiza el desplazamiento suave hacia la sección "Sobre mí"
            sobreMiSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
