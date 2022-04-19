import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import styles from './ListCard.module.css';
import ListCardItem from '../ListCardItem/ListCardItem';

const ListCard = () => {
    const listData = [
        {
            name: 'Advertising',
            amount: '$ 705',
        },
        {
            name: 'Car & Truck Expenses',
            amount: '$ 674',
        },
        {
            name: 'Contractors',
            amount: '$ 428',
        },
        {
            name: 'Education and Training',
            amount: '$ 404 ',
        },
        {
            name: 'Employee Benefits',
            amount: '$ 399',
        },
        {
            name: 'Meals & Entertainment',
            amount: '$ 370',
        },
        {
            name: 'Office Expenses & Postage',
            amount: '$ 355',
        },
        {
            name: 'Other Expenses',
            amount: '$ 210',
        },
        {
            name: 'Professional Services',
            amount: '$ 190',
        },
        {
            name: 'Rent',
            amount: '$ 188',
        },
    ];
    return (
        <div className={styles.listContainer}>
            <List
                sx={{
                    minWidth: '392px',
                    bgcolor: 'background.paper',
                    borderRadius: '10px',
                }}
                aria-label='contacts'
            >
                <ListItem
                    sx={{
                        borderBottom: '1px solid rgba(1, 9, 55, 0.1)',
                        paddingTop: '0',
                    }}
                >
                    <ListItemText
                        primary='Expenses'
                        sx={{ color: '#010937', fontWeight: 500 }}
                    />
                    <div className={styles.select}>
                        <select>
                            <option>This Week</option>
                        </select>
                    </div>
                </ListItem>
                <ListItem
                    sx={{
                        backgroundColor: 'rgba(1, 9, 55, 0.02)',
                        borderBottom: '1px solid rgba(1, 9, 55, 0.1)',
                        paddingTop: '0',
                        paddingBottom: '0',
                    }}
                >
                    <ListItem>
                        <ListItemText
                            primary='#'
                            sx={{
                                fontWeight: 400,
                                fontSize: '12px',
                                color: 'rgba(1, 9, 55, 0.7)',
                            }}
                        />
                        <ListItemText
                            primary='Name'
                            sx={{
                                fontWeight: 400,
                                fontSize: '12px',
                                color: 'rgba(1, 9, 55, 0.7)',
                            }}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Amount'
                            sx={{
                                textAlign: 'end',
                                fontWeight: 400,
                                fontSize: '12px',
                                color: 'rgba(1, 9, 55, 0.7)',
                            }}
                        />
                    </ListItem>
                </ListItem>
                {listData.map((item, idx) => {
                    let i = idx + 1;
                    if (i < 10) {
                        return (
                            <ListCardItem
                                key={idx}
                                counter={`0${i}`}
                                name={item.name}
                                amount={item.amount}
                            />
                        );
                    } else {
                        return (
                            <ListCardItem
                                key={idx}
                                counter={`${i}`}
                                name={item.name}
                                amount={item.amount}
                            />
                        );
                    }
                })}
            </List>
        </div>
    );
};

export default ListCard;
