import Title from "../../common/Title/Title";
import styles from "./Delivery.module.css";
import DeliveryQuestion from "./DeliveryQuestion/DeliveryQuestion";
import DeliveryQuestion2 from "./DeliveryQuestion2/DeliveryQuestion2";

const Delivery = () => {
    return(
        <div className="main">
            <Title title='Условия доставки'/>
            <div className={styles.delivery__container}>
                <div className={styles.delivery}>
                    <DeliveryQuestion/>
                    <DeliveryQuestion2/>
                </div>
                <div className={styles.delivery__info}>
                    <div className={styles.delivery__infoWork}>
                        <div className={styles.delivery__infoBlock}>
                            <h4 className={styles.delivery__infoTitle}>График работы доставки:</h4>
                            <span className={styles.delivery__infoText}>с 10:00-21:00</span>
                        </div>
                        <div className={styles.delivery__infoBlock}>
                            <h4 className={styles.delivery__infoTitle}>График работы кафе:</h4>
                            <span className={styles.delivery__infoText}>с 08:00-21:00</span>
                        </div>
                    </div>
                    <div className={styles.delivery__infoOrder}>
                        <h3 className={styles.delivery__infoTitle}>Минимальный заказ:</h3>
                        <span className={styles.delivery__infoText}>
                            Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
                            Доставка оператором такси от любой суммы заказа - по тарифам 
                            перевозчика.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery;