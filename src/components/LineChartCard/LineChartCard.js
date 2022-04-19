import React from 'react';
import styles from './LineChartCard.module.css';
import { Line } from 'react-chartjs-2';
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
const LineChartCard = ({
    labels = [],
    title = '',
    percent = {},
    colors = {},
}) => {
    const data = (canvas) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, colors.gradient1);
        gradient.addColorStop(0.2, colors.gradient2);
        gradient.addColorStop(0.7, colors.gradient3);
        return {
            labels: labels,
            datasets: [
                {
                    label: '',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: {
                        target: 'origin',
                        // above: 'linear-gradient(top, rgb(0, 0, 255), #fff) ', // Area will be red above the origin
                        below: gradient, // And blue below the origin
                    },
                    borderColor: colors.line,
                    tension: 0.1,
                    backgroundColor: gradient,
                },
            ],
        };
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                grid: {
                    display: true,
                    borderDash: [5],
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        return '$' + value + `${value === 0 ? '' : 'k'}`;
                    },
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const canvas = document.createElement('canvas');
    const lineData = data(canvas);
    return (
        <div className={styles.lineContainer}>
            <Card
                sx={{
                    minWidth: 392,
                    minHeight: 233,
                    borderRadius: '10px',
                    boxShadow: 'none',
                }}
            >
                <CardContent
                    sx={{
                        paddingBottom: '1px',
                        // paddingTop: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <h3>{title}</h3>
                    <div className={styles.percent}>
                        {percent.arrow === 'up' ? (
                            <ArrowDropUpIcon sx={{ color: '#008274' }} />
                        ) : (
                            <ArrowDropDownIcon sx={{ color: '#E03C43' }} />
                        )}
                        <h4
                            style={{
                                color:
                                    percent.arrow === 'up'
                                        ? '#008274'
                                        : '#E03C43',
                            }}
                        >
                            {percent.number}
                        </h4>
                    </div>
                </CardContent>
                <CardContent
                    sx={{
                        paddingTop: '0',
                        paddingBottom: '10px',
                    }}
                >
                    <Line
                        options={options}
                        data={lineData}
                        // style={{ paddingTop: '2px' }}
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default LineChartCard;
