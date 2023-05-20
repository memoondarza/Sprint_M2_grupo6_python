var ctx = document.getElementById("grafica_1")
var myGrafica = new Chart(ctx,{
    type:"bar",
    data:{
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Estadísticas Hemograma, por año', 
            data: [1000, 1200, 1250, 1350, 1245, 1360, 1245, 1850, 1560, 1356, 1756, 1450, 1603],
            backgroundColor: [
                'rgb(66, 134, 244)',
                'rgb(74, 135, 72)',
                'rgb(229, 89, 55)',
                'rgb(50, 168, 82)',
                'rgb(49, 87, 60)',
                'rgb(141, 44, 222)',
                'rgb(49, 86, 87)',
                'rgb(134, 217, 219)',
                'rgb(134, 217, 219)',
                'rgb(66, 111, 112)',
                'rgb(91, 66, 112)',
                'rgb(141, 44, 222)',
                'rgb(168, 105, 50)',           
            ],
            borderColor: [
            ],
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx2 = document.getElementById("grafica_2")
var myGrafica2 = new Chart(ctx2,{
    type:"line",
    data:{
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Perfil Bioquímico, por año', 
            data: [8560, 7895, 4567, 5781, 7812, 4589, 6789, 6000, 5000, 4500, 5350, 6542, 6856],
            backgroundColor: [
                'rgb(66, 134, 244)',
                'rgb(74, 135, 72)',
                'rgb(229, 89, 55)',
                'rgb(50, 168, 82)',
                'rgb(49, 87, 60)',
                'rgb(141, 44, 222)',
                'rgb(109, 86, 87)',
                'rgb(134, 217, 219)',
                'rgb(134, 217, 219)',
                'rgb(66, 111, 112)',
                'rgb(91, 66, 112)',
                'rgb(133, 44, 222)',
                'rgb(168, 105, 50)',           
            ],
            borderColor: [
            ],
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx3 = document.getElementById("grafica_3")
var myGrafica3 = new Chart(ctx3,{
    type:"line",
    data:{
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Radiología', 
            data: [1230, 4252, 3240, 2340, 4230, 4560, 4890, 5660, 4230, 6520, 5780, 6890, 6540],
            backgroundColor: [
                'rgb(66, 134, 244)',
                'rgb(74, 135, 72)',
                'rgb(229, 89, 55)',
                'rgb(50, 168, 82)',
                'rgb(49, 87, 60)',
                'rgb(141, 44, 222)',
                'rgb(109, 86, 87)',
                'rgb(134, 217, 219)',
                'rgb(134, 217, 219)',
                'rgb(66, 111, 112)',
                'rgb(91, 66, 112)',
                'rgb(133, 44, 222)',
                'rgb(168, 105, 50)',           
            ],
            borderColor: [
            ],
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx4 = document.getElementById("grafica_4")
var myGrafica4 = new Chart(ctx4,{
    type:"bar",
    data:{
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Endoscopía', 
            data: [123, 425, 324, 234, 423, 456, 489, 566, 423, 652, 578, 689,  654],
            backgroundColor: [
                'rgb(66, 134, 244)',
                'rgb(74, 135, 72)',
                'rgb(229, 89, 55)',
                'rgb(50, 168, 82)',
                'rgb(49, 87, 60)',
                'rgb(141, 44, 222)',
                'rgb(109, 86, 87)',
                'rgb(134, 217, 219)',
                'rgb(134, 217, 219)',
                'rgb(66, 111, 112)',
                'rgb(91, 66, 112)',
                'rgb(133, 44, 222)',
                'rgb(168, 105, 50)',           
            ],
            borderColor: [
            ],
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});