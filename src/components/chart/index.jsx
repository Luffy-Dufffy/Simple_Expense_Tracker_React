import React from 'react'
import Chart from 'react-apexcharts'

const TransactionChartSummary = ({ expense, income }) => {

    const hasData = expense !== 0 && income !== 0;

    const options = {
        labels: ['Expenses', 'Incomes'],
        colors: ['#FF8000', '#00f0F0'],
        chart: {
            type: 'pie',
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: false,
                    },
                },
            },
        },
        fill: {
            colors: ['#FF8000', '#00F0F0'],
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            style: {
                fontSize: '12px',
                fontFamily: undefined,
            },
        },
    };

    return (
        <Chart
            options={options}
            series={hasData ? [expense, income] : [1, 1]}
            type='pie'
            width={'100%'}
        />
    )
}

export default TransactionChartSummary
