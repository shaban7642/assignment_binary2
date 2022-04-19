import React from 'react';
import LineChartCard from '../../components/LineChartCard/LineChartCard';
import styles from './StatisticsPage.module.css';
import SmallLineChartCard from '../../components/SmallLineChartCard/SmallLineChartCard';
import GreenFireIcon from '../../assets/icons/GreenFireIcon.svg';
import RedFireIcon from '../../assets/icons/RedFireIcon.svg';
import StatisticsUpIcon from '../../assets/icons/StatisticsUpIcon.svg';
import StatisticsDownIcon from '../../assets/icons/StatisticsDownIcon.svg';
import EmptyLineCard from '../../components/EmptyLineCard/EmptyLineCard';
import BankCard from '../../components/BankCard/BankCard';
import ListCard from '../../components/ListCard/ListCard';
import { Grid } from '@mui/material';
const StatisticsPage = () => {
    const labels = [1, 2, 2];
    const data = [65, 59, 80, 81, 56, 55, 40];
    return (
        <div className={styles.pageContainer}>
            <div className={styles.topContainer}>
                <div className={styles.helloContainer}>
                    <h2>Hello, Liam!</h2>
                    <p>Finance Mission Control</p>
                </div>
                <div className={styles.selectContainer}>
                    <select>
                        <option>Last 7 Days</option>
                    </select>
                </div>
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.cardsContainer}>
                    <Grid container spacing={3} rowSpacing={1}>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <LineChartCard
                                title='MRR / ARR'
                                percent={{ number: '10%', arrow: 'up' }}
                                labels={labels}
                                lineData={data}
                                colors={{
                                    line: '#008274',
                                    gradient1: 'rgba(0, 130, 116, 0.3)',
                                    gradient2: 'rgba(0, 130, 116, 0.1)',
                                    gradient3: 'rgba(0, 130, 116, 0)',
                                }}
                            />
                        </Grid>

                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <LineChartCard
                                title='Cost Of Sales'
                                percent={{ number: '10%', arrow: 'down' }}
                                labels={labels}
                                lineData={data}
                                colors={{
                                    line: '#EC5600',
                                    gradient1: 'rgba(236, 86, 0, 0.3)',
                                    gradient2: 'rgba(236, 86, 0, 0.1)',
                                    gradient3: 'rgba(236, 86, 0, 0)',
                                }}
                            />
                        </Grid>

                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <LineChartCard
                                title='Gross Profit'
                                percent={{ number: '10%', arrow: 'up' }}
                                labels={labels}
                                lineData={data}
                                colors={{
                                    line: '#FFAF0B',
                                    gradient1: 'rgba(255, 175, 11,  0.3)',
                                    gradient2: 'rgba(255, 175, 11,  0.1)',
                                    gradient3: 'rgba(255, 175, 11,  0)',
                                }}
                            />
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <LineChartCard
                                title='Net Assets'
                                percent={{ number: '10%', arrow: 'down' }}
                                labels={labels}
                                lineData={data}
                                colors={{
                                    line: '#EC5600',
                                    gradient1: 'rgba(236, 86, 0, 0.3)',
                                    gradient2: 'rgba(236, 86, 0, 0.1)',
                                    gradient3: 'rgba(236, 86, 0, 0)',
                                }}
                            />
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <LineChartCard
                                title='Equitity Investment'
                                percent={{ number: '10%', arrow: 'up' }}
                                labels={labels}
                                lineData={data}
                                colors={{
                                    line: '#FFAF0B',
                                    gradient1: 'rgba(255, 175, 11,  0.3)',
                                    gradient2: 'rgba(255, 175, 11,  0.1)',
                                    gradient3: 'rgba(255, 175, 11,  0)',
                                }}
                            />
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <LineChartCard
                                title='Gross Profit Margin'
                                percent={{ number: '10%', arrow: 'up' }}
                                labels={labels}
                                lineData={data}
                                colors={{
                                    line: '#FFAF0B',
                                    gradient1: 'rgba(255, 175, 11,  0.3)',
                                    gradient2: 'rgba(255, 175, 11,  0.1)',
                                    gradient3: 'rgba(255, 175, 11,  0)',
                                }}
                            />
                        </Grid>

                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <SmallLineChartCard
                                title='Analysis on payable'
                                number='$ 5,410.40'
                                imageSrc={StatisticsDownIcon}
                            />

                            <SmallLineChartCard
                                title='Customer lifetime value'
                                number='$ 8,312.31'
                                imageSrc={GreenFireIcon}
                            />

                            <SmallLineChartCard
                                title='Analysis on receivables'
                                number='$ 498.58'
                                imageSrc={StatisticsUpIcon}
                            />
                            <SmallLineChartCard
                                title='Burn Rate'
                                number='$ 650.10'
                                duration='per month'
                                imageSrc={RedFireIcon}
                            />
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <BankCard />
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <ListCard />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
