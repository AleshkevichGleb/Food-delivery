import styles from "./Contact.module.css";
import phoneImage from "../../../assets/images/calling.svg";

const Contact = ({text}) => {
    return(
        <div className = {styles.contactBlock}>
            <div>
                <div className={styles.phone}>
                    <img src={phoneImage} alt="phone" />
                </div>
            </div>
            <div className={styles.contactBlock__text}>
                <span className={styles.contactBlock__title}>Контакты</span>
                <span className={styles.contactBlock__phoneNumber}>{text}</span>
            </div>
        </div>
    )
}

export default Contact;