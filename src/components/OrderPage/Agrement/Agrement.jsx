import { Link } from "react-router-dom";
import styles from "./Agrement.module.scss";
import PageContainer from "../PageContainer/PageContainer";
import CheckDataPopUp from "../CheckDataPopUp/CheckDataPopUp";

const Agrement = ({data, handleData, isDisabled, setIsShowPopUp}) => {

    const sendData = (event) => {
        event.preventDefault();
        setIsShowPopUp(true)
        if(!isDisabled && data.agreement) {
            console.log(data);
        }
    }
    
    return(
        <>
        <PageContainer>
            <div className={styles.form__group}>
                <input 
                    className={styles.checbox}
                    type="checkbox"
                    name = "agreement"
                    onChange={handleData}
                    checked = {data.agreement === true}

                />
                <span className={styles.text}>Я согласен на обработку моих перс. данных в соответствии с  
                    <Link state = {true} to = "/delivery">
                        <span className={styles.link}> Условиями</span>
                    </Link>
                </span>

                <button 
                    className={styles.button} 
                    type = "submit" 
                    // disabled = {isDisabled}
                    onClick={sendData}
                >
                    Оформить заказ
                </button>
            </div>
        </PageContainer>
        </>
    )
}

export default Agrement;