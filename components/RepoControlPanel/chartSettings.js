export const chartOptions = {
    scales: {
        yAxes: [{
            stacked: true,
        }],
        xAxes: [{
            stacked: true
        }]
    }
};


const chartColors = [
    "rgba(53, 138, 156, 1.00)",
    "rgba(33, 118, 136, 1.00)",
    "rgba(13, 98, 116, 1.00)",
    "rgba(3, 88, 106, 1.00)",
]

export const makeChartData = (stats) => {

    const datasetsUsers = stats.users.map( (user, i) => {
        return{
            type : "bar",
            label : "Commits by " + user.name,
            backgroundColor: chartColors[i],
            data: user.commits
        }
    } );

    const datasetsTotal = {
        type: 'line',
        label: 'Commits per month',
        data: stats.months.map( (month, i) => {
            let monthTotal = 0;
            for(let j=0; j<stats.users.length; j++){
                monthTotal = monthTotal + stats.users[j].commits[i]
            }
            return monthTotal;
        }),
        borderColor: 'rgba(83, 199, 174, 1.00)',
        backgroundColor: "transparent",
        borderWidth: 2
    };

    const datasets = [datasetsTotal, ...datasetsUsers];

    return {
        labels: stats.months,
        datasets: datasets
    };


}

