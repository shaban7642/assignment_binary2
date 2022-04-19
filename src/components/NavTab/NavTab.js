import { Tab } from '@mui/material';
import React from 'react';

const NavTab = ({ ImageSrc, active, ImageAlt, style }) => {
    return (
        <div
            style={{
                ...style,
                borderRight: active && '2px solid #EC5600',
                marginBottom: style?.marginBottom || '25px',
            }}
        >
            <div
                style={{
                    border: active
                        ? '2px solid #FFF9F5'
                        : '1px solid rgba(99, 99, 99, 0.1)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '25px',

                    backgroundColor: active
                        ? 'rgba(236, 86, 0, 0.1)'
                        : 'transparent',
                }}
            >
                <Tab
                    icon={<img src={ImageSrc} alt={ImageAlt} />}
                    iconPosition='start'
                />
            </div>
        </div>
    );
};

export default NavTab;
