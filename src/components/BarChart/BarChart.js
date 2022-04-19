import React from 'react';
import styles from './BarChart.module.css';
import { Bar } from 'react-chartjs-2';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Card, CardContent } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const BarChart = ({ percent = {}, color = '', bank }) => {
    const data = {
        labels: [10, 20, 30, 40, 40, 50],
        datasets: [
            {
                label: 'Dataset 1',
                data: [23, 33, 13, 23, 1, 33],
                backgroundColor: color,
                barThickness: 14,
                borderRadius: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
        scales: {
            y: {
                display: false,
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: 11,
                    color: 'rgba(242, 244, 252, 0.6)',
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className={styles.lineContainer}>
            <Card
                sx={{
                    minWidth: 308,
                    height: 130,
                    borderRadius: '10px',
                    boxShadow: 'none',
                    backgroundColor: bank ? '#262d54' : '#fff',
                }}
            >
                <CardContent
                    sx={{
                        paddingBottom: '1px',
                        paddingTop: '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div className={styles.percent}>
                        {percent.arrow === 'up' ? (
                            <ArrowDropUpIcon sx={{ color: ' #FFFFFF' }} />
                        ) : (
                            <ArrowDropDownIcon sx={{ color: ' #FFFFFF' }} />
                        )}
                        <h4
                            style={{
                                color: '#FFFFFF',
                            }}
                        >
                            {percent.number}
                        </h4>
                        <h3>Since Last Month</h3>
                    </div>
                </CardContent>
                <CardContent
                    sx={{
                        paddingTop: '0',
                        paddingBottom: '0',
                    }}
                >
                    <Bar
                        options={options}
                        data={data}
                        style={{ height: '102px' }}
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default BarChart;
