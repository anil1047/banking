'use client'
import React from 'react'
import {Chart as ChartJS , ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts}:DoughnutChartProps) => {

    const data= {
        datasets: [ {
            label:'Banks',
            data:[12300, 13050, 13700],
            backgroundColor:['#FF6384','#36A2EB','#FFCE56'],
            
        }],labels:['Bank1','Bank2','Bank3']
    }
  return (
    
    <Doughnut data={data}
    options={{
        cutout: '70%',
        plugins: {
            legend: {
                display: false, }},
    }}
    />
  )
}

export default DoughnutChart
