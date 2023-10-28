import React, { useEffect , useState } from 'react';
import styles from './style.module.css'
const BatteryComponent = () => {
    const [battery, setBattery] = useState();


    navigator.getBattery().then((battery) => {
      let batteryToFaiz = battery.level * 100
      setBattery(batteryToFaiz)
    })


  return (
    <>
        <div className={styles.batteryBody}>
            <div style={{width:battery+"%"}} className={styles.batteryColor}>
              <p className={styles.batteryCount}>
                {
                  battery
                }
              </p>
            </div>
        </div>
    </>
  )
}

export default BatteryComponent