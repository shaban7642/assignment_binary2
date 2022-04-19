import React from 'react';
import styles from './BankCard.module.css';

import { Card, CardContent } from '@mui/material';
import SmallLineChartCard from '../SmallLineChartCard/SmallLineChartCard';
import BankIcon from '../../assets/icons/BankIcon.svg';
import CreditCardIcon from '../../assets/icons/CreditCard.svg';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import BarChart from '../BarChart/BarChart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BankCard = () => {
    return (
        <div className={styles.cardContainer}>
            <Card
                sx={{
                    minWidth: 392,
                    height: 502,
                    borderRadius: '10px',
                    boxShadow: 'none',
                    backgroundColor: '#262d54',
                }}
            >
                <SmallLineChartCard
                    title='Bank Balances'
                    number='$ 201,142'
                    imageSrc={BankIcon}
                    bank={true}
                />

                <CardContent
                    sx={{
                        paddingTop: '0',
                        paddingBottom: '10px',
                    }}
                >
                    <BarChart
                        percent={{ number: '10%', arrow: 'up' }}
                        color='#2FC083'
                        bank={true}
                    />
                </CardContent>

                <div className={styles.line}></div>
                <SmallLineChartCard
                    title='Credit Cards Balances'
                    number='$ 5,410'
                    imageSrc={CreditCardIcon}
                    bank={true}
                />
                <CardContent
                    sx={{
                        paddingTop: '0',
                        // paddingBottom: '10px',
                    }}
                >
                    <BarChart
                        percent={{ number: '10%', arrow: 'down' }}
                        color='#FFD361'
                        bank={true}
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default BankCard;
