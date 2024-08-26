import React from 'react'
import Chart from 'react-apexcharts'

const TransactionChartSummary = ({ expense = 100, income = 100 }) => {

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
            series={[expense, income]}
            type='pie'
            width={'100%'}
            height={'100%'}
        />
    )
}

export default TransactionChartSummary
