import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import Title from "../../common/Title/Title";
import ButtonLink from "../../common/ButtonLink/ButtonLink";

const Cart = () => {

    return(
        <div className="main">
            <Title title='Корзина'/>
            {/* <Link to = '/order' state = {true}><button className={styles.button}>Оформить заказ</button></Link> */}
            <ButtonLink title = 'Оформить заказ' url='/order'/>
        </div>
    )
}

export default Cart;