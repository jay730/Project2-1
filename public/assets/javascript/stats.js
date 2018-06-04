$(document).ready(function(){
var chart1 = document.getElementById('chart1').getContext('2d');

var mostPlanesChart = new Chart (chart1,{
    type: 'pie',
    data: {
        labels: ['US', 'China', 'Canada', 'Germany', 'UK', 'France', 'Japan', 'Brazil', 'Spain', 'India'],
        datasets: [{
            data: [
                9054478,
                1853088,
                1200361,
                1154472,
                1056206,
                827851,
                655495,
                647753,
                616893,
                592292,
            ],
            backgroundColor: [
                '#A7574A',
                '#4C2733',
                '#4C3950',
                '#3B4F67',
                '#1E656E',
                '#1F7865',
                '#4D874F',
                '#84903C',
                '#C0923D',
                '#EC895B'
            ]
            
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Top 10 Countries with Most Planes in the Air',
            fontSize: 24
        
        }
    }
});

var chart2 = document.getElementById('chart2').getContext('2d');
var mostPassengersChart = new Chart (chart2,{
    type: 'pie',
    data: {
        labels: ['US', 'China', 'UK', 'Germany', 'Japan', 'Ireland', 'Brazil', 'India', 'Turkey', 'Indonesia'],
        datasets: [{
            data: [
                798230000,
                436183969,
                131449680,
                115540886,
                113762000,
                113144501,
                102039359,
                98927860,
                96604665,
                88685767,
            ],
            backgroundColor: [
                '#A7574A',
                '#4C2733',
                '#4C3950',
                '#3B4F67',
                '#1E656E',
                '#1F7865',
                '#4D874F',
                '#84903C',
                '#C0923D',
                '#EC895B'
            ]
            
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Top 10 Countries with Most Passengers in the Air',
            fontSize: 24
        }
    }
});
});