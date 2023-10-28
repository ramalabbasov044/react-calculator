import React, { useEffect, useState } from 'react';
import styles from './style.module.css'

const BatteryComponent = () => {
    const [battery, setBattery] = useState();

    useEffect(() => {
        navigator.getBattery().then((batteryInfo) => {
            let batteryToFaiz = batteryInfo.level * 100;
            setBattery(batteryToFaiz);
        }).catch((error) => {
            console.error('Battery status error:', error);
        });
    }, []); 

    return (
        <>
            <div className={styles.batteryBody}>
                <div style={{ width: battery + "%" }} className={styles.batteryColor}>
                    <p className={styles.batteryCount}>
                        {battery}
                    </p>
                </div>
            </div>
        </>
    );
}

export default BatteryComponent;
