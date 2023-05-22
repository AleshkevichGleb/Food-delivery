import styles from "./Payment.module.scss";
import { useState } from "react";

const Payment = ({data, setData, handleData}) => {
    const [isPayment, setIsPayment] = useState('cash');

    const getHandleData = (event) => {
        handleData(event)
    }

    return(
        <div className={styles.form__block}>
            <h3 className={styles.form__subtitle}>3. Оплатить</h3>
            <div className={styles.form__group}>
                <div className={styles.changeButtonsContainer}>
                    <button 
                        className= {isPayment === 'online' ? [styles.changeButton, styles.changeButton___checked].join(' ') : styles.changeButton}
                        id = "type"
                        value="online"
                        name = 'payment'
                        onClick={(event) => {
                            setData({...data, payment:{...data.payment={}}})
                            getHandleData(event)
                            setIsPayment('online')
                        }}
                    >
                        Оплата онлайн
                    </button>
                    <button 
                        className= {isPayment === 'card' ? [styles.changeButton, styles.changeButton___checked].join(' '):styles.changeButton  }
                        id = "type"
                        value="card"
                        name = 'payment'
                        onClick={(event) => {
                            setData({...data, payment:{...data.payment={}}})
                            getHandleData(event)
                            setIsPayment('card')
                        }}
                    >
                        Курьеру картой
                    </button>
                    <button 
                        className= {isPayment === 'cash' ?[styles.changeButton, styles.changeButton___checked].join(' ') : styles.changeButton}
                        id = "type"
                        value="cash"
                        name = 'payment'
                        onClick={(event) => {
                            getHandleData(event)
                            setIsPayment('cash')
                        }}
                    >
                        Наличными
                    </button>
                </div>
            </div>
            {isPayment === 'cash' &&
                <div className={styles.input__group}>
                    <input 
                        className= {styles.input}
                        placeholder=" "
                        id = "surrender_of_money" 
                        type="text" 
                        name = "payment"
                        value={data.surrender_of_money}
                        onChange={getHandleData}
                     />
                    <label htmlFor="surrender_of_money" className={styles.label}>Сдача с</label>
                </div>
            } 
        </div>
    )
}

export default Payment;
