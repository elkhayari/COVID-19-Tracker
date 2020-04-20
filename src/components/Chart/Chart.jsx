import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import {Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'


const Chart = ({data:{ confirmed, recovered, deaths}, country}) =>{
    
    //Global data
    console.log('new data',confirmed)
    const [dailyData, setDailyData] = useState([])  // <=> state= {dalyData={}} in a class

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }
        
        fetchApi();
    }, []) // behaves like didMount just once

    const lineChart = (
        dailyData.length
        ? (
            <Line data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },
                     {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Death',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,

                     }],
                    }} />
        ) 
        : 
        null
 
        

    );

console.log('bef barchart', confirmed, recovered, deaths)
    const barChart = (
        confirmed
        ? (<Bar
               data={{
                labels:['I', 'C', 'D'],
                datasets:[{
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [confirmed.value, recovered.value, deaths.value]
                }]
               }}
               options={{
                legend: { display: false},
                title: { display: true, test:`Current state in ${country}`}
               }}

          />)
        : null
    )


    return(
        <div className={styles.container}> 
         {country ? barChart :  lineChart}
        </div>
    )
}

export default Chart;