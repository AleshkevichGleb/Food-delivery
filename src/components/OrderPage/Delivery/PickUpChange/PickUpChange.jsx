import styles from "./PickUpChange.module.scss";

const PickUpChange = ({getHandleData}) => {

    const handleData = (event) => {
        getHandleData(event);
    }

    return(
        <div className={styles.form__group}>
            <h4 className={styles.underTitle}>Выберите ресторан</h4>
            <select id = 'streetRestaraunt' name = "address" className={styles.select} onChange={handleData}>
                <option className={styles.option} value="not indicated">Выберите ресторан</option>
                <option className={styles.option} value="Комсомольская">Комсомольская 45</option>
                <option className={styles.option} value="Жукова">Жукова 31</option>
                <option className={styles.option} value="Независимости">Независимости 12</option>
            </select>
        </div>
    )
}

export default PickUpChange;