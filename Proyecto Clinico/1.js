
// Datos de ejemplo para los gráficos
const data2023 = {
  bar: [65, 59, 80, 81, 56],
  pie: [20, 30, 15, 35],
  line: [50, 60, 50, 60, 70]
};

const data2024 = {
  bar: [75, 69, 90, 91, 66],
  pie: [25, 25, 25, 25],
  line: [40, 50, 60, 70, 80]
};

let barChart, pieChart, lineChart;

function createBarChart(data) {
  const ctx = document.getElementById('barChart').getContext('2d');
  if (barChart) barChart.destroy();
  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'],
      datasets: [{
        label: 'Ventas',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
      }]
    }
  });
}

function createPieChart(data) {
  const ctx = document.getElementById('pieChart').getContext('2d');
  if (pieChart) pieChart.destroy();
  pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Cafe', 'Té ', 'Pasteles', 'Bocadillos'],
      datasets: [{
        data: data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    }
  });
}

function createLineChart(data) {
  const ctx = document.getElementById('lineChart').getContext('2d');
  if (lineChart) lineChart.destroy();
  lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'],
      datasets: [{
        label: 'Ingresos',
        data: data,
        borderColor: '#FF6384',
        borderWidth: 2,
        tension: 0.3
      }]
    }
  });
}

document.getElementById('yearFilter').addEventListener('change', (e) => {
  const year = e.target.value;
  const data = year === '2023' ? data2023 : data2024;
  createBarChart(data.bar);
  createPieChart(data.pie);
  createLineChart(data.line);
});

// Inicializar los gráficos con datos de 2023
createBarChart(data2023.bar);
createPieChart(data2023.pie);
createLineChart(data2023.line);
