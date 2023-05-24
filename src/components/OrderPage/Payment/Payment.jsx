import ErrorFormValidate from "../ErrorFormValidate/ErrorFormValidate";
import PageContainer from "../PageContainer/PageContainer";
import styles from "./Payment.module.scss";
import { useState } from "react";

const Payment = ({data, setData, handleData, error}) => {
    const [isPayment, setIsPayment] = useState('cash');

    const getHandleData = (event) => {
        event.preventDefault();
        handleData(event)
    }

    return(
        <PageContainer title = "3. Оплатить">
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
                    <ErrorFormValidate error = {error} name = 'surrender_of_money'/>
                </div>
            } 
       </PageContainer>
    )
}

export default Payment;
