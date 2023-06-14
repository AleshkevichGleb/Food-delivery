import styles from "./DeliveryQuestion.module.css";
import { useState } from "react";
import { deliveryData } from "../../../data/delivery";
const DeliveryQuestion = () => {
    const [isSelected, setIsSelected] = useState(null);

    const handleSelected = (i) => {
        if(isSelected === i) return(setIsSelected(null));
        setIsSelected(i)
    }

    return (
        <div className={styles.delivery__block}>
            {deliveryData.map((item) => 
                <div className={styles.delivery__item} key = {item.id}>
                    <div 
                        className={styles.delivery__title} 
                        onClick={() => handleSelected(item.id)}
                    >
                        <h3 className={styles.item__title__text}>{item.title}</h3>
                        <div className={isSelected === item.id ? styles.delivery__change__out : styles.delivery__change_in}></div>
                    </div>
                    <div className={isSelected === item.id ? styles.delivery__text__openly : styles.delivery__text__close}>{item.text}</div>
                </div>
            )}
        </div>  
    )
}

export default DeliveryQuestion;