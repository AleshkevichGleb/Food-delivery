import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {

    return(
        <div className="main">
            <Link to = '/order' state = {true}><button className={styles.button}>Оформить заказ</button></Link>
        </div>
    )
}

export default Cart;