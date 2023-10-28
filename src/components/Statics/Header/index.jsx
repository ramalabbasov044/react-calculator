import styles from './style.module.css'
import '../../../assets/css/reset/globalStyles.css'
import FormatHour from '../FormatHour/index'
import Battery from '../Battery/index'
const Header = () => {
  return (
    <>
        <div className={styles.topHeader}>
            <p className={styles.timeTitle}>
                <FormatHour />
            </p>
            <div>
                <Battery />
            </div>
        </div>
    </>
  )
}

export default Header