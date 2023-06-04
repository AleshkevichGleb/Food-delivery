import { useContext, useEffect, useState } from "react";
import "../../index.css";
import styles from "./OrderPage.module.scss";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo/ContactInfo";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import TimeToDelivery from "./TimeToDelivery/TimeToDelivery";
import Agrement from "./Agrement/Agrement";
import { useValidate } from "./useValidate/useValidate";
import Title from "../../common/Title/Title";
import CheckDataPopUp from "./CheckDataPopUp/CheckDataPopUp";
import sendData from "../../assets/images/sendData.svg"
import errorSendData from "../../assets/images/errorSendData.png"
import BackLink from "../../common/BackLink/BackLink";
import { AppContext } from "../../App";

const OrderPage = () => {
    const {basket} = useContext(AppContext);

    const initialState = {
        name: '',
        phone: '',
        delivery: 'delivery',
        address: {
            street: "",
            house: "",
            flat: "",
            entrance: "",
            floor: "",
            comment: ""
        },
        payment:{
            type: 'cash'
        },
        time: "soon",
        persons: 1,
        recall: 'noRecall',
        agreement: false
    }

    const [data, setData] = useState(initialState);
    const [isDisabled, setIsDisabled] = useState(true)
    const {error, validate} = useValidate();

    const [isShowPopPup, setIsShowPopUp] = useState(false);

    useEffect(() => {
        const show = Object.values(error).find(el => el !== '')||
        data.name === '' || data.phone === '' || data.address.street === '' || data.payment.surrender_of_money === '' ||
        data.address.house === '' || data.address.streetRestaraunt === 'not indicated' || data.time === '' || !data.agreement ;

        setIsDisabled(show)
    }, [error, data.name, data.phone, data.address.street, data.address.house , 
        data.address.streetRestaraunt, data.time, data.payment.surrender_of_money, data.agreement])

    const handleData = (event) => {
        const {id, value, name, type, checked} = event.target;

        validate(name === 'address' || 'payment' ? id : name, value);

        const setValue = type === 'checkbox' ? checked : value

        if(name === 'address' || name === 'payment') {
            setData({...data, [name]:{...data[name], [id]: setValue}});
        }else {
            setData({...data, [name]: setValue}) 
        }

    }

    return(
        <>
        {isShowPopPup &&
            <>
                {isDisabled 
                ? <CheckDataPopUp 
                  image = {errorSendData} 
                  setIsShowPopUp = {setIsShowPopUp}
                  title = 'Ошибка!'
                  text='Пожалуйста, заполните все поля и провeрьте их на правильность'
                  />
                
                : <CheckDataPopUp 
                  image = {sendData} 
                  setIsShowPopUp = {setIsShowPopUp}
                  title = 'Спасибо!'
                  text = 'Ваш заказ отправлен на обработку'
                  />
                }

            </>
        }
        <div className="main">
            <div className={styles.orderPage}>
                <div className={styles.order__container}>
                    <BackLink title = 'в корзину'/>
                    <Title title = 'Оформление заказа'/>

                    <form className={styles.form}>
                        <ContactInfo data = {data} setData = {setData} handleData = {handleData} error = {error}/>
                        <Delivery data = {data} setData = {setData} handleData = {handleData} error = {error}/>
                        <Payment data = {data} setData = {setData} handleData = {handleData} error = {error}/>
                        <TimeToDelivery data = {data} handleData={handleData} error = {error}/>
                        <Agrement basket = {basket} data = {data} handleData = {handleData} setIsShowPopUp = {setIsShowPopUp} isDisabled = {isDisabled} setIsDisabled = {setIsDisabled}/>
                    </form>

                    <pre style={{background:'#fff'}}>
                        {JSON.stringify(data, null, 2)}
                    </pre>

                </div>
            </div>
        </div>
        </>
    )
}

export default OrderPage;