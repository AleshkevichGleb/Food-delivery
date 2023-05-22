import styles from "./ContactInfo.module.scss";
const ContactInfo = ({data, handleData}) => {

    const getHandleData = (event) => {
        handleData(event);
    }

    return(
        <div className={styles.form__block}>
            <h3 className={styles.form__subtitle}>1. Контактная информация</h3>
            <div className={styles.form__group}>

                <div className={styles.input__group}>
                    <input 
                        className= {styles.input}
                        placeholder=" "
                        id = "name" 
                        name = "name" 
                        type="text" 
                        value={data.name}
                        onChange={getHandleData}
                    />
                    <label htmlFor="name" className={styles.label}>Имя</label>
                </div>

                <div className={styles.input__group}>
                    <input 
                        className= {styles.input}
                        placeholder=" "
                        type="tel" 
                        id = "phone"
                        name = "phone"
                        value={data.phone}
                        onChange={getHandleData}
                    />
                    <label htmlFor="phone" className={styles.label}>Телефон</label>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;