// Obtener el contenedor de talleres
const talleresScroll = document.getElementById('talleresScroll');

// Duplicar el contenido para el efecto de desplazamiento continuo
talleresScroll.innerHTML += talleresScroll.innerHTML;

// Establecer la velocidad de desplazamiento
const speed = 1; // Ajusta la velocidad según lo necesites

// Controlar la pausa
let isPaused = false;

talleresScroll.addEventListener('mouseenter', () => {
    isPaused = true; // Detener el desplazamiento
});

talleresScroll.addEventListener('mouseleave', () => {
    isPaused = false; // Reanudar el desplazamiento
});

// Función de desplazamiento
function scrollTalleres() {
    if (!isPaused) { // Solo desplazar si no está en pausa
        const scrollLeft = talleresScroll.scrollLeft;
        talleresScroll.scrollLeft = scrollLeft + speed;

        // Reiniciar el desplazamiento si es necesario
        if (scrollLeft >= talleresScroll.scrollWidth / 2) {
            talleresScroll.scrollLeft = 0;
        }
    }
    requestAnimationFrame(scrollTalleres);
}

// Iniciar la función de desplazamiento
scrollTalleres();

// Modal
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const modalBody = document.getElementById('modal-body');

// Función para abrir el modal y mostrar el horario
function showModal(horario) {
    modalBody.innerHTML = ''; // Limpiar contenido previo
    const nombreTaller = document.createElement('p');
    nombreTaller.innerHTML = `<strong>${horario.nombre}</strong>`;
    modalBody.appendChild(nombreTaller);

    const listaFechas = document.createElement('ul');
    horario.fechas.forEach(fecha => {
        const listItem = document.createElement('li');
        listItem.textContent = fecha;
        listaFechas.appendChild(listItem);
    });
    modalBody.appendChild(listaFechas);

    subscribeButton.dataset.horario = JSON.stringify(horario); // Agregar el horario al botón
    modal.style.display = 'block'; // Mostrar modal
}

// Evento para cada botón "Inscribirse"
const inscribirseButtons = document.querySelectorAll('.inscribirse');
inscribirseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const taller = button.parentElement;
        const horario = JSON.parse(taller.getAttribute('data-horario'));
        showModal(horario);
    });
});

// Cerrar modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBody.innerHTML = ''; // Limpiar el contenido al cerrar
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalBody.innerHTML = ''; // Limpiar el contenido al cerrar
    }
});

// Botón "Suscribirse"
const subscribeButton = document.getElementById('subscribe-button');

// Evento para el botón "Suscribirse"
subscribeButton.addEventListener('click', () => {
    const horario = JSON.parse(subscribeButton.dataset.horario); // Obtén el horario del taller
    alert(`Te has inscrito en el taller: ${horario.nombre}.\nFechas: ${horario.fechas.join(', ')}`);
    modal.style.display = 'none'; // Cierra el modal
});