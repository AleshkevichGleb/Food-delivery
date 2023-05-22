import { Link } from "react-router-dom";
import styles from "./Agrement.module.scss";

const Agrement = ({data, handleData}) => {

    // const getHandleData = (event) => {
    //     handleData(event)
    // }

    const sendData = (event) => {
        event.preventDefault();
        console.log(data);
    }
    console.log(data.agreement);
    return(
       <div className={styles.form__block}>
            <div className={styles.form__group}>
                <input 
                    className={styles.checbox}
                    type="checkbox"
                    name = "agreement"
                    onChange={handleData}
                    checked = {data.agreement == true}

                />
                <span className={styles.text}>Я согласен на обработку моих перс. данных в соответствии с  
                    <Link state = {true} to = "/delivery">
                        <span className={styles.link}> Условиями</span>
                    </Link>
                </span>

                <button className={styles.button} type = "submit" onClick={sendData}>Оформить заказ</button>
            </div>
       </div>
    )
}

export default Agrement;