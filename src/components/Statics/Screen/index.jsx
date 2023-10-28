import React from 'react'
import styles from './style.module.css'

const HeaderScreen = ({ number }) => {
  return (
    <>
      <div className={styles.screenBody}>
          <p className={styles.resultNumber}>
              {
                number
              }
          </p>
      </div>
    </>
  )
}

export default HeaderScreen