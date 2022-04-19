import React from 'react';
import styles from './ListCardItem.module.css';
import { ListItem, ListItemText } from '@mui/material';

const ListCardItem = ({ name, amount, counter }) => {
    return (
        <div className={styles.listItemContainer}>
            <ListItem
                sx={{
                    borderBottom: '1px solid rgba(1, 9, 55, 0.1)',
                    paddingTop: '0',
                    paddingBottom: '0',
                }}
            >
                <ListItem>
                    <ListItem
                        disablePadding
                        sx={{
                            width: '90px',
                        }}
                    >
                        <ListItemText
                            primary={counter}
                            sx={{
                                fontWeight: 400,
                                fontSize: '13px',
                                color: 'rgba(1, 9, 55, 0.5)',
                            }}
                        />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText
                            primary={name}
                            sx={{
                                textAlign: 'start',
                                fontWeight: 400,
                                fontSize: '14px',
                                color: '#010937',
                            }}
                        />
                    </ListItem>
                </ListItem>
                <ListItem
                    sx={{
                        width: '90px',
                    }}
                >
                    <ListItemText
                        primary={amount}
                        sx={{
                            textAlign: 'end',
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#010937',
                            width: '40px',
                        }}
                    />
                </ListItem>
            </ListItem>
        </div>
    );
};

export default ListCardItem;
