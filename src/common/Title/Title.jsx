import styles from "./Title.module.css";

const Title = ({title}) => {
    return (
        <div className={styles.productsItems__titleContainer}>
            <h2 className={styles.productsItems__title}>{title}</h2>
        </div>
    )
}

export default Title;