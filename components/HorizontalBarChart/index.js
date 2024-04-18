// import styles from '@/styles/BarChart.module.css'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale, 
    LinearScale,
    BarElement, 
    Title, 
    Tooltip, 
    Legend
)

export default function HorizontalBarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'data1',
                    data: [10, 20, 30, 40, 50, 60, 70],
                    borderColor: ('rgb(28, 28, 165'),
                    backgroundColor: ('rgba(28, 28, 165, 0.5'),
                },
                {
                    label: 'data2',
                    data: [14, 25, 23, 36, 54, 68, 34],
                    borderColor: ('rgb(65, 35, 15'),
                    backgroundColor: ('rgba(48, 78, 165, 0.5'),
                },
                {
                    label: 'data3',
                    data: [70, 60, 50, 40, 30, 20, 10],
                    borderColor: ('rgb(98, 153, 165'),
                    backgroundColor: ('rgba(148, 128, 15, 0.5'),
                },
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
                <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}} />
            </div>
        </>
    )
}