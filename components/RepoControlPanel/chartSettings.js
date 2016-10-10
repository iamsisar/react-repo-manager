var randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : 0) * Math.round(Math.random() * 10);
};

let dataUser1 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()];
let dataUser2 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()];
let dataTotal = dataUser1.map((c,i) => dataUser1[i] + dataUser2[i] )

var chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
        datasets: [{
            type: 'bar',
            label: 'Commits by User1',
            backgroundColor: "rgba(101,137,155,0.5)",
            data: dataUser1
        }, {
            type: 'bar',
            label: 'Commits by User2',
            backgroundColor: "rgba(151,187,205,0.5)",
            data: dataUser2
        }, {
            type: 'line',
            label: 'Commits per day',
            data: dataTotal,
            borderColor: 'rgba(151,187,205,0.5)',
            backgroundColor: "transparent",
            borderWidth: 2
        }]
};

var chartOptions = {
    scales: {
        yAxes: [{
            stacked: true,

        }],
        xAxes: [{
            stacked: true
        }]
    }
};

export default {chartData, chartOptions};
