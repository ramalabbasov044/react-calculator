import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import '../../../assets/css/reset/globalStyles.css'
import FormatHour from '../FormatHour/index'
import Battery from '../Battery/index'
const Header = () => {
  const [isCharging, setIsCharging] = useState(false)

  useEffect(() => {
      navigator?.getBattery().then((batteryInfo) => {
        setIsCharging(batteryInfo.charging)
      })
  },[]); 

  return (
    <>
        <div className={styles.topHeader}>
            <p className={styles.timeTitle}>
                <FormatHour />
            </p>
              <p className={styles.isChargingTitle}>
                {
                  isCharging ? "Your Phone is charging" : ""
                }
              </p>
            <div>
                <Battery />
            </div>
        </div>
    </>
  )
}

export default Header