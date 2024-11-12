// Obtener elementos del modal
const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
const closeModal = document.querySelector(".close");

// Obtener todos los botones "Más Información"
const infoButtons = document.querySelectorAll('.informacion');
infoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const psicologoNombre = button.getAttribute('data-name');
        const psicologoInfo = button.getAttribute('data-info');

        modalTitle.textContent = psicologoNombre;
        modalInfo.textContent = psicologoInfo;

        modal.style.display = "block"; // Mostrar el modal
    });
});

// Cerrar el modal cuando se hace clic en la "X"
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera de él
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}