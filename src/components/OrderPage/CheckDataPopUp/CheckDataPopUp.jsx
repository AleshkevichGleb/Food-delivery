import styles from "./CheckDataPopUp.module.css";

const CheckDataPopUp = ({image, setIsShowPopUp, title, text}) => {
    return (
        <div className={styles.container} onClick={() => setIsShowPopUp(false)}>
            <div className={styles.block}>
                <span className={styles.close}>&#10006;</span>
                <div className={styles.image__container}>
                    <img src={image} alt="" />
                </div>
                <span className={styles.title}>{title}</span>
                <span className={styles.text}>{text}</span>
            </div>
        </div>
    )
}

export default CheckDataPopUp;