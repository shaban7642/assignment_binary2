import React from 'react';
import styles from './EmptyLineCard.module.css';
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
import { Card } from '@mui/material';

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
const EmptyLineCard = () => {
    return (
        <div className={styles.lineContainer}>
            <Card
                sx={{
                    width: 392,
                    height: 233,
                    borderRadius: '10px',
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                }}
            ></Card>
        </div>
    );
};

export default EmptyLineCard;
