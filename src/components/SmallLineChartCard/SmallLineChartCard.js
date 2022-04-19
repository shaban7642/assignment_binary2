import React from 'react';
import styles from './SmallLineChartCard.module.css';
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
const SmallLineChartCard = ({ title, number, imageSrc, duration, bank }) => {
    return (
        <div
            className={styles.lineContainer}
            style={{ marginTop: bank ? '0' : '36px' }}
        >
            <Card
                sx={{
                    minWidth: 392,
                    height: 92,
                    borderRadius: '10px',
                    boxShadow: 'none',
                    backgroundColor: bank ? '#262d54' : '#fff',
                }}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div className={styles.percent}>
                        <h3
                            style={{
                                color: bank ? '#F2F4FC' : '#010937',
                            }}
                        >
                            {title}
                        </h3>
                        <div className={styles.percentNumber}>
                            <h4
                                style={{
                                    color: bank ? '#F2F4FC' : '#010937',
                                    opacity: bank ? 1 : 0.6,
                                }}
                            >
                                {number}
                            </h4>
                            {duration && <p>{duration}</p>}
                        </div>
                    </div>
                    <img src={imageSrc} alt='icon' />
                </CardContent>
            </Card>
        </div>
    );
};

export default SmallLineChartCard;
