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
    "rgba(101,137,155,0.5)",
    "rgba(151,187,205,0.5)",
    "rgba(81,117,135,0.5)",
    "rgba(111,147,175,0.5)"
]

export const makeChartData = (stats) => {

    const datasets = stats.users.map( (user, i) => {
        return{
            type : "bar",
            label : "Commits by " + user.name,
            backgroundColor: chartColors[i],
            data: user.commits
        }
    } );

    datasets.push({
        type: 'line',
        label: 'Commits per month',
        data: stats.months.map( (month, i) => {
            let monthTotal = 0;
            for(let j=0; j<stats.users.length; j++){
                monthTotal = monthTotal + stats.users[j].commits[i]
            }
            return monthTotal;
        }),
        borderColor: 'rgba(151,187,205,0.5)',
        backgroundColor: "transparent",
        borderWidth: 2
    });

    return {
        labels: stats.months,
        datasets: datasets
    };


}

