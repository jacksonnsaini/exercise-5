// import styles from '@/styles/BarChart.module.css'
import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale, 
    ArcElement,
    Tooltip, 
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["red", "blue", "yellow", "green", "purple", "pink", "orange"],
            datasets: [
                {
                    label: 'data1',
                    data: [10, 20, 32, 40, 50, 64, 20],
                    borderColor: [
                        ('rgb(28, 28, 165'),
                        ('rgb(28, 28, 15'),
                        ('rgb(28, 28, 5'),
                        ('rgb(28, 66, 165'),
                        ('rgb(77, 28, 165'),
                        ('rgb(28, 68, 165'),
                        ('rgb(28, 28, 221')
                    ],
                    backgroundColor: [
                        ('rgba(28, 28, 165, .4'),
                        ('rgba(28, 28, 15, .4'),
                        ('rgba(28, 28, 5, .4'),
                        ('rgba(28, 66, 165, .4'),
                        ('rgba(77, 28, 165, .4'),
                        ('rgba(28, 68, 165, .4'),
                        ('rgba(28, 28, 221, .4')
                    ],
                    borderWidth: 1,
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintingAspectRatio: false,
                responsive: true
            }
        })

    })


    return (
        <>
            <div>
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}} />
            </div>
        </>
    )
}