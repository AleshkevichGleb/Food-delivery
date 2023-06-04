import styles from "./CartOrder.module.scss";
import ButtonLink from "../../../common/ButtonLink/ButtonLink";

const CartOrder = ({basket}) => {
    const fullSum = basket.reduce((acc, elem) => {
        return Number(acc) + Number(elem.cartPrice);
    }, 0);

   
    return(
        <div className={styles.cartOrder}>
            <div className={styles.cartOrder__orderInfo}>
                <span className={styles.cartOrder__total}>Итого: <span className={styles.cartOrder__price}>{fullSum} ₽</span></span>
                {
                    fullSum < 2300
                    ?   <span className={styles.cartOrder__text}>До бесплатной доставки не хватает:{' '} 
                            <span className={styles.cartOrder__freePrice}>{2300-fullSum} ₽</span>
                        </span>
                    :   <span className={styles.cartOrder__text}>Беслатная доставка</span>
                }
                <span className={styles.cartOrder__text}>Минимальная сума заказа 1500 ₽</span>
                
            </div>
            <ButtonLink addStyles={styles.orderButton} title = 'Оформить заказ' url='/order'/>
        </div>
    )
}

export default CartOrder;