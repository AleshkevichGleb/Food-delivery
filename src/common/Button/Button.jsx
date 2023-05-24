import styles from "./Button.module.css";

const Button = ({id, title, src}) => {
    return (
        <button 
        className={styles.button} 
        id = {id}
        >
            <span>{title}</span>
            <img src={src} alt="buy" />
        </button>
    )
}

export default Button