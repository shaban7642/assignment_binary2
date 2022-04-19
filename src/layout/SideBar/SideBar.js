import React from 'react';
import { Avatar, Tab, Tabs } from '@mui/material';
import BinaryLogo from '../../assets/icons/BinaryLogo.svg';
import StatisticIcon from '../../assets/icons/StatisticsIcon.svg';
import MessagesIcon from '../../assets/icons/MessagesIcon.svg';
import FolderIcon from '../../assets/icons/FolderIcon.svg';
import BookIcon from '../../assets/icons/BookIcon.svg';
import HeadPhoneIcon from '../../assets/icons/HeadPhoneIcon.svg';
import BellIcon from '../../assets/icons/BellIcon.svg';
import styles from './SideBar.module.css';
import NavTab from '../../components/NavTab/NavTab';
import AvatarImage from '../../assets/images/image 1.png';

const SideBar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <img className={styles.logo} src={BinaryLogo} alt='logo' />
            <Tabs
                aria-label='sidebar'
                orientation='vertical'
                style={{ marginTop: '130px' }}
            >
                <NavTab
                    ImageSrc={StatisticIcon}
                    active={true}
                    ImageAlt='statistic icon'
                />
                <NavTab ImageSrc={MessagesIcon} ImageAlt='messages icon' />
                <NavTab ImageSrc={FolderIcon} ImageAlt='folder icon' />
                <NavTab ImageSrc={BookIcon} ImageAlt='book icon' />
                <NavTab
                    ImageSrc={HeadPhoneIcon}
                    ImageAlt='head phone icon'
                    style={{ marginBottom: '170px' }}
                />

                <Tab
                    icon={<img src={BellIcon} alt='bell icon' />}
                    iconPosition='start'
                />
                <Avatar
                    alt='Remy Sharp'
                    src={AvatarImage}
                    sx={{
                        width: '50px',
                        height: '50px',
                        left: '25px',
                    }}
                    style={{ marginTop: '50px' }}
                />
            </Tabs>
        </div>
    );
};

export default SideBar;
