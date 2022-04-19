import React from 'react';
import styles from './Main.module.css';
import routes from '../../routes';
import { Route, Routes } from 'react-router';

const Main = () => {
    return (
        <div className={styles.mainContainer}>
            <Routes>
                {routes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={route.element}
                        exact={route.exact || false}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default Main;
