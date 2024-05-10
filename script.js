document.addEventListener("DOMContentLoaded", function() {
    // Mostrar la notificación al cargar la página
    const notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Ocultar la notificación después de 3 segundos (3000 milisegundos)
    setTimeout(function() {
        notification.style.display = 'none';
    }, 1500); // Cambia este valor para ajustar la duración de la notificación
});
