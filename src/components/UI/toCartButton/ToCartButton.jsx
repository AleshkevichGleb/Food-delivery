import styles from "./ToCartButton.module.css";
import cart from "./buy.svg";

const ToCartButton = ({children}) => {
    return(
        <button className={styles.button} onClick={() => alert(1)}>
            <span>{children}</span>
            <img src={cart} alt="buy" />
        </button>
    )
}

export default ToCartButton;