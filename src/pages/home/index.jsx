import { useState } from 'react'
import Screen from '../../components/Statics/Screen'
import styles from './style.module.css'
import Header from '../../components/Statics/Header/index'

const Home = () => {
  const [value,setValue] = useState(0)
  const [totValue,setTotValue] = useState([])

  const showScreen = (num) => {
      setValue(num)
      setTotValue([...totValue,num])
  }

  const clearScreen = () => {
    setTotValue([])
  }

  const resultScreen = () => {
      let index = totValue.indexOf("*")

      let firstArr = totValue.slice(0,index)
      let number1 = parseInt(firstArr.join(''));

      let lastItem = totValue.at(-1)
      let lastArr = totValue.slice(index+1,lastItem)
      let number2 = parseInt(lastArr.join(""))
      console.log(number2);

      setTotValue([number1 * number2]);
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
                  <button className={styles.operator}>()</button>
                  <button className={styles.operator}>%</button>
                  <button onClick={() => showScreen("/")} className={styles.operator}>/</button>

              {/* Group 2 */}
                  <button onClick={() => showScreen(7)} className={styles.numberButton}>7</button>
                  <button onClick={() => showScreen(8)} className={styles.numberButton}>8</button>
                  <button onClick={() => showScreen(9)} className={styles.numberButton}>9</button>
                  <button onClick={() => showScreen("*")} className={styles.operator}>*</button>

              {/* Group 3 */}
                  <button onClick={() => showScreen(4)} className={styles.numberButton}>4</button>
                  <button onClick={() => showScreen(5)} className={styles.numberButton}>5</button>
                  <button onClick={() => showScreen(6)} className={styles.numberButton}>6</button>
                  <button onClick={() => showScreen("-")} className={styles.operator}>-</button> 

              {/* Group 4 */}
                <button onClick={() => showScreen(1)} className={styles.numberButton}>1</button>
                <button onClick={() => showScreen(2)} className={styles.numberButton}>2</button>
                <button onClick={() => showScreen(3)} className={styles.numberButton}>3</button>
                <button onClick={() => showScreen("+")} className={styles.operator}>+</button>

              {/* Group 5 */}
                <button  className={styles.numberButton}>+/-</button>
                <button onClick={() => showScreen(0)} className={styles.numberButton}>0</button>
                <button className={styles.numberButton}>.</button>
                <button onClick={() => resultScreen()} className={styles.resultOperator}>=</button>
            </div>
        </div>
    </>
  )
}

export default Home