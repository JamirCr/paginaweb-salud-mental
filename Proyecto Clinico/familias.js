function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

function submitForm(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Aquí podrías agregar lógica para enviar el formulario (ej. AJAX)

    // Muestra el mensaje de éxito
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Reinicia el formulario
    document.getElementById('contact-form').reset();
}