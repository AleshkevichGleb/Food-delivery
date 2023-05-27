import styles from "./Button.module.css";

const Button = ({id, title, src, onClick, addStyles}) => {
    return (
        <button 
        className={[styles.button, addStyles].join(' ')} 
        id = {id}
        onClick={onClick}
        >
            <span>{title}</span>

            {src && <img src={src} alt="buy" />}
        </button>
    )
}

export default Button