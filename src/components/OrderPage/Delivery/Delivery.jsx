import { useState } from "react";
import styles from "./Delivery.module.scss";
import timeImage from "../../../assets/images/time.svg";
import DeliveryChange from "./DeliveryChange/DeliveryChange";
import PickUpChange from "./PickUpChange/PickUpChange";

const Delivery = ({data, setData, handleData}) => {
    
    const [isDelivery, setIsDelivery] = useState(true);

    
    const getHandleData = (event) => {
        handleData(event);
    }

    return(
        <div className={styles.form__block}>
            <h3 className={styles.form__subtitle}>2. Доставка</h3>
            <div className={styles.form__group}>
                <div className={styles.changeButtonsContainer}>
                    <button 
                        className= {isDelivery?[styles.changeButton, styles.changeButton___checked].join(' ') : styles.changeButton}
                        name = "delivery"
                        value="delivery"
                        onClick={(event) => {
                            // setData({...data, address:{...data.address={}}})
                            getHandleData(event)
                            setIsDelivery(true);
                        }}
                    >
                        Доставка
                    </button>
                    <button 
                        className= {isDelivery? styles.changeButton : [styles.changeButton, styles.changeButton___checked].join(' ')}
                        name = "delivery"
                        value="pickup"
                        onClick={(event) => {
                            // setData({...data, address:{...data.address={}}})
                            getHandleData(event)
                            setIsDelivery(false)
                            // setData({...data, address:{...data.address,streetRestaraunt: 'not indicated'}})
                        }}
                    >
                        Самовывоз
                    </button>
                </div>
                {isDelivery && 
                <div className={styles.timeBlock}>
                    <img src={timeImage} alt="timeImage" />
                    <span className={styles.timeBlock__text}>Доставим через  1 час 30 минут</span>
                </div>}
            </div>
            {isDelivery 
            ? <DeliveryChange data = {data} getHandleData = {getHandleData}/> 
            : <PickUpChange data = {data} getHandleData = {getHandleData}/> 
            }
        </div>
    )
}

export default Delivery;