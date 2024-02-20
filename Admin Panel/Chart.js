
let myChart = document.getElementById('myChart').getContext('2d')

let popChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Comment',
            data: [
                50, 32, 30, 40,35,41, 39, 30,19,49,39,45,28
            ],
            backgroundColor: 'transparent',
            fill: false,
            borderColor: '#2965F1',
            tension: 0.1
        },{
            label: 'Like',
            data: [
                30, 38, 40, 25,31,48, 40, 10,25,32,15,18,23
            ],
            backgroundColor: 'transparent',
            fill: false,
            borderColor: '#EAB308',
            tension: 0.1
        },{
            label: 'Blogs',
            data: [
                10, 18, 23, 29,34,40, 48, 40,37,30,24,37,40
            ],
            backgroundColor: 'transparent',
            fill: false,
            borderColor: '#020617',
            tension: 0.1
        }]
    }
})