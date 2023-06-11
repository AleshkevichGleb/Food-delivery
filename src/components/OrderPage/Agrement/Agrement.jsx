import { Link } from "react-router-dom";
import styles from "./Agrement.module.scss";
import PageContainer from "../PageContainer/PageContainer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Agrement = ({data, handleData, isDisabled, setIsShowPopUp}) => {
    const [basket, setBacket] = useState([]);
    const state = useSelector(state => state.productCountChange)

    useEffect(() => {
        let editState = [];
        state.forEach(type => {
            const {link} = type;
            type.products.forEach(el=> {
                if(el.cartCount > 0) editState = [...editState, {...el, link}];
            })
        })

        setBacket(editState);

    },[state])

    const sendData = (event) => {
        event.preventDefault();
        setIsShowPopUp(true)
        if(!isDisabled && data.agreement) {
            console.log(data);
            console.log(basket);
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