import styles from "./EmptyBasket.module.scss";
import emptyCartImage from "../../../assets/images/emptyCart.png";

const EmptyBasket = () => {
    return(
        <div className={styles.container}>
            <img className={styles.image} src={emptyCartImage} alt="sdfdsf" />
            <span className={styles.text}>Basket is empty</span>
        </div>
    )   
}

export default EmptyBasket;