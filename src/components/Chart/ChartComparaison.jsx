import React, {useState, useEffect} from 'react';

// import styles
import styles from './ChartComparaison.module.css'

// import react-chart-js
import {Line} from 'react-chartjs-2'
import { fetchDailyData_byCountry } from '../../api';


const ChartComparaison = ({country_1, country_2}) =>{

    //fetch daily data from api
    const [dailyData_1, setDailyData_1] = useState([])
    const [dailyData_2, setDailyData_2] = useState([])
  
   

    useEffect(() => {
        const fetchApi = async () =>{
           
            setDailyData_1(await fetchDailyData_byCountry(country_1))
            setDailyData_2(await fetchDailyData_byCountry(country_2))
        }

        fetchApi()

    })

    const lineChart = (
        <Line 
        
        
        />
    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}



export default ChartComparaison;