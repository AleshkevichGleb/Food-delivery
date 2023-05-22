import { useState } from "react";
import "../../index.css";
import styles from "./OrderPage.module.scss";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo/ContactInfo";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import TimeToDelivery from "./TimeToDelivery/TimeToDelivery";
import Agrement from "./Agrement/Agrement";

const OrderPage = () => {
    const initialState = {
        name: '',
        phone: '',
        delivery: 'delivery',
        address: {},
        payment:{
            type: 'cash'
        },
        time: "soon",
        persons: 1,
        recall: 'noRecall'
    }

    const [data, setData] = useState(initialState);
    
    const handleData = (event) => {
        event.preventDefault();
        let {id, value, name, type, checked} = event.target;

        id = name === 'time' || name === 'recall' ? name : id;
        value = type === 'checkbox' ? checked : value

        if(name === 'address' || name === 'payment') {
            setData({...data, [name]:{...data[name], [id]: value}});
        }else {
            setData({...data, [id]: value}) 
        }

    }

    return(
        <div className="main">
            <div className={styles.orderPage}>
                <div className={styles.order__container}>
                    <Link to = "/cart" state = {true}><span className={styles.back}>в корзину</span></Link>
                    <h1 className={styles.title}>Оформление заказа</h1>
                    <pre style={{background:'#fff'}}>
                        {JSON.stringify(data, null, 2)}
                    </pre>

                    <form className={styles.form}>
                        <ContactInfo data = {data} setData = {setData} handleData = {handleData}/>
                        <Delivery data = {data} setData = {setData} handleData = {handleData}/>
                        <Payment data = {data} setData = {setData} handleData = {handleData}/>
                        <TimeToDelivery data = {data} handleData={handleData}/>
                        <Agrement data = {data} handleData = {handleData}/>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default OrderPage;