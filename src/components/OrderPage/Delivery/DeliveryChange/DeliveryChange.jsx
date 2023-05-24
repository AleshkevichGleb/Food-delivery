import ErrorFormValidate from "../../ErrorFormValidate/ErrorFormValidate";
import styles from "./DeliveryChange.module.scss";

const DeliveryChange = ({data, getHandleData, error}) => {

    return(
        <>
        <h4 className={styles.underTitle}>Адрес доставки</h4>
        <div className={styles.form__group}>
            
            <div className={styles.input__group}>
                    <input 
                        className= {styles.input}
                        placeholder=" "
                        id = "street" 
                        type="text"
                        name = "address"
                        value = {data.address.street}
                        onChange={getHandleData}
                    />
                    <label htmlFor="street" className={styles.label}>Укажите улицу</label>
                    <ErrorFormValidate error={error} name = 'street'/>
            </div>
            <div className={styles.input__group}>
                    <input 
                        className= {[styles.input, styles.input_short].join(' ')}
                        placeholder=" "
                        id = "house" 
                        type="text"
                        name = "address"
                        value = {data.address.house}
                        onChange={getHandleData}
                    />
                    <label htmlFor="house" className={styles.label}>Номер дома</label>
                    <ErrorFormValidate error={error} name = 'house'/>
            </div>

            <div className={styles.input__group}>
                    <input 
                        className= {[styles.input, styles.input_average].join(' ')}
                        placeholder=" "
                        id = "flat" 
                        type="text"
                        name = "address"
                        value = {data.address.flat}
                        onChange={getHandleData}
                    />
                    <label htmlFor="flat" className={styles.label}>№ квартиры/офиса</label>
                    <ErrorFormValidate error={error} name = 'flat'/>
            </div>

            <div className={styles.input__group}>
                    <input 
                        className= {[styles.input, styles.input_short].join(' ')}
                        placeholder=" "
                        id = "entrance" 
                        type="text"
                        name = "address"
                        value = {data.address.entrance}
                        onChange={getHandleData}
                    />
                    <label htmlFor="entrance" className={styles.label}>Подъезд</label>
                    <ErrorFormValidate error={error} name = 'entrance'/>
            </div>

            <div className={styles.input__group}>
                    <input 
                        className= {[styles.input, styles.input_short].join(' ')}
                        placeholder=" "
                        id = "floor" 
                        type="text"
                        name = "address"
                        value = {data.address.floor}
                        onChange={getHandleData}
                    />
                    <label htmlFor="floor" className={styles.label}>Этаж</label>
                    <ErrorFormValidate error={error} name = 'floor'/>
            </div>

            <div className={styles.input__group}>
                    <input 
                        className= {[styles.input, styles.input_long].join(' ')}
                        placeholder=" "
                        id = "comment" 
                        type="text"
                        name = "address"
                        value = {data.address.comment}
                        onChange={getHandleData}
                    />
                    <label htmlFor="comment" className={styles.label}>Комментарий</label>
            </div>
        </div>
        </> 
    )
}

export default DeliveryChange;