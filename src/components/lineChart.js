import Chart from 'chart.js/auto'

function createChart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    /* eslint-disable no-unused-vars */
    const myChart = new Chart(ctx, config);
}

setTimeout(createChart, 1000); //used setTimeout to mount the chart 

const labels = ['january','february','March','April','May','June','July'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Sample Dataset',
    data: [0,5,1,2,5,4,7],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    backgroundColor:'rgb(255,99,132)',
    tension: 0.15
  }]
};

const config = {
  type: 'line',
  data:data,
  options: {
        responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 10
      }
    }
    }
};

