import { useState } from 'react'
import Screen from '../../components/Statics/Screen'
import styles from './style.module.css'
import Header from '../../components/Statics/Header/index'

const Home = () => {
  const [value, setValue] = useState(0)
  const [totValue, setTotValue] = useState([])

  const showScreen = (num) => {
    setValue(num)
    setTotValue([...totValue, num])
  }

  let clearScreen = () => {
    setTotValue([])
  }

  let removeLastElement = () => {
    if (totValue.length > 0) {
      let umumiTotval = [...totValue];
      // console.log(umumiTotval+"asd");
      umumiTotval.pop()
      setTotValue(umumiTotval);
    }
  }

  let findIndexOfElement = (param) => {
      return totValue.indexOf(param)
  }

  let arrToString = (array) => {
    let empStr = ""
    array.map((item) => empStr+=item)
    return empStr
  }

  let resultScreen = () => {
      if(totValue.includes("*")){
        let indexEl = findIndexOfElement("*")

        let item1 = totValue.slice(0,indexEl)
        let item2 = indexEl !==-1 ? totValue.slice(indexEl + 1) : null

        setTotValue([arrToString(item1) * arrToString(item2)])
      }

      if(totValue.includes("/")){
        let indexEl = findIndexOfElement("/")

        let item1 = totValue.slice(0,indexEl)
        let item2 = indexEl !==-1 ? totValue.slice(indexEl + 1) : null

        setTotValue([arrToString(item1) / arrToString(item2)])
      }

      if(totValue.includes("-")){
        let indexEl = findIndexOfElement("-")

        let item1 = totValue.slice(0,indexEl)
        let item2 = indexEl !==-1 ? totValue.slice(indexEl + 1) : null

        setTotValue([arrToString(item1) - arrToString(item2)])
      }

      if(totValue.includes("+")){
        let indexEl = findIndexOfElement("+")

        let item1 = totValue.slice(0,indexEl)
        let item2 = indexEl !==-1 ? totValue.slice(indexEl + 1) : null

        setTotValue([parseInt(arrToString(item1)) + parseInt(arrToString(item2))])
      }

      if(totValue.includes("%")){
        let indexEl = findIndexOfElement("%")

        let item1 = totValue.slice(0,indexEl)
        let item2 = indexEl !==-1 ? totValue.slice(indexEl + 1) : null

        setTotValue([arrToString(item1) / 100 * arrToString(item2)])
      }
  }

  return (
    <>
      <div className={styles.screen}>
        <Header />
        
        <Screen number={totValue} />

        {/* Buttons */}
          <div className={styles.buttonGroup}>
            {/* Group 1 */}
              <button onClick={() => clearScreen()} className={styles.clearButton}>C</button>
              <button onClick={() => showScreen('%')} className={styles.operator}>%</button>
              <button onClick={() => showScreen('/')} className={styles.operator}>/</button>
              <button onClick={removeLastElement} className={styles.operator}>Del</button>

            {/* Group 2 */}
              <button onClick={() => showScreen(7)} className={styles.numberButton}>7</button>
              <button onClick={() => showScreen(8)} className={styles.numberButton}>8</button>
              <button onClick={() => showScreen(9)} className={styles.numberButton}>9</button>
              <button onClick={() => showScreen('*')} className={styles.operator}>*</button>

            {/* Group 3 */}
              <button onClick={() => showScreen(4)} className={styles.numberButton}>4</button>
              <button onClick={() => showScreen(5)} className={styles.numberButton}>5</button>
              <button onClick={() => showScreen(6)} className={styles.numberButton}>6</button>
              <button onClick={() => showScreen('-')} className={styles.operator}>-</button>

            {/* Group 4 */}
              <button onClick={() => showScreen(1)} className={styles.numberButton}>1</button>
              <button onClick={() => showScreen(2)} className={styles.numberButton}>2</button>
              <button onClick={() => showScreen(3)} className={styles.numberButton}>3</button>
              <button onClick={() => showScreen('+')} className={styles.operator}>+</button>

            {/* Group 5 */}
              <button onClick={() => showScreen("+" || "-")} className={styles.numberButton}>+/-</button>
              <button onClick={() => showScreen(0)} className={styles.numberButton}>0</button>
              <button onClick={() => showScreen(".")} className={styles.numberButton}>.</button>
              <button onClick={resultScreen} className={styles.resultOperator}>=</button>
          </div>
      </div>
    </>
  )
}

export default Home
