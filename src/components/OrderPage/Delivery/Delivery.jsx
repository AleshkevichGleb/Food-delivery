import { useState } from "react";
import styles from "./Delivery.module.scss";
import timeImage from "../../../assets/images/time.svg";
import DeliveryChange from "./DeliveryChange/DeliveryChange";
import PickUpChange from "./PickUpChange/PickUpChange";
import PageContainer from "../PageContainer/PageContainer";

const Delivery = ({data, setData, handleData, error}) => {
    
    const [isDelivery, setIsDelivery] = useState(true);

    
    const getHandleData = (event) => {
        event.preventDefault();
        handleData(event);
    }

    return(
        <PageContainer title = '2. Доставка'>
            <div className={styles.form__group}>
                <div className={styles.changeButtonsContainer}>
                    <button 
                        className= {isDelivery?[styles.changeButton, styles.changeButton___checked].join(' ') : styles.changeButton}
                        name = "delivery"
                        value="delivery"
                        disabled = {isDelivery === true}
                        onClick={(event) => {
                            setData({...data, address:{...data.address={ 
                                street: "",
                                flat: "",
                                house: "",
                                entrance: "",
                                floor: "",
                                comment: ""}}
                            })
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
                        disabled = {isDelivery !== true}
                        onClick={(event) => {
                            setData({...data, address:{...data.address={}}})
                            setIsDelivery(false)
                            setData({...data, address:{...data.address = {streetRestaraunt: 'not indicated'}}})
                            getHandleData(event)
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
            ? <DeliveryChange data = {data} getHandleData = {getHandleData} error = {error}/> 
            : <PickUpChange data = {data} getHandleData = {getHandleData}/> 
            }
        </PageContainer>
    )
}

export default Delivery;