import React, { useState, useEffect } from "react";
import styles from "./charts.module.css";
import { fetchCityCases } from "../../api";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line, Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

const Charts = ({ data : { active, recovered, deaths }, city }) => {
    const [cityData, setCityData] = useState([]);

    useEffect(() => {
        const fetchCityAPI = async () => {
            setCityData(await fetchCityCases());
        }
        fetchCityAPI();
    }, [setCityData]);

    console.log('In Chart data => ', city, active, recovered, deaths);

    const lineChart = (
        cityData.length ?
            (
            <Line
                data = {{
                    labels: cityData.map(({name}) => name),
                    datasets: [{
                        data: cityData.map(({active}) => active),
                        label: 'Active',
                        borderColor: 'blue',
                        backgroundColor: 'rgba(0, 0, 255, 0.5)',
                        fill: true,
                    }, {
                        data: cityData.map(({recovered}) => recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    }, {
                        data: cityData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }],
                }}
            />) : null
    )

    const barChart = (
        city ?
            (<Bar
                data = {{
                    labels: ['active', 'recovered', 'deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [active, recovered, deaths],
                    }],
                }}
            />) : null
    )

    return (
        <div className={styles.container}>
            { city ? barChart : lineChart }
        </div>
    )
}

export default Charts;
