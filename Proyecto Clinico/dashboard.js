// Datos para la gráfica de usuarios suscritos
const subscriptionChart = new Chart(document.getElementById('subscriptionChart'), {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Usuarios Suscritos',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#00796b',
            tension: 0.4
        }]
    }
});

// Datos para la gráfica de talleres populares
const workshopChart = new Chart(document.getElementById('workshopChart'), {
    type: 'bar',
    data: {
        labels: ['Yoga', 'Terapia Creativa', 'Manejo del Estrés'],
        datasets: [{
            label: 'Participantes',
            data: [50, 30, 20],
            backgroundColor: ['#4caf50', '#ff9800', '#f44336']
        }]
    }
});