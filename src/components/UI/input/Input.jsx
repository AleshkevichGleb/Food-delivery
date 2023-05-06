import styles from "./Input.module.css";
import locationImg from "../../../assets/images/location.svg";
import searchImg from "../../../assets/images/search.svg";
import { useState } from "react";

const Input = () => {
    const [address, setAddress] = useState('');

    return(
        <div className={styles.input__block}>
            <img className = {styles.input__location} src={locationImg} alt="" />
            <input 
                id="inputAddress"
                className = {styles.input} 
                type="text" 
                placeholder = "Введите адрес доставки"
                onChange={event => setAddress(event.target.value)}
            />
            <img 
                className = {styles.input__search} 
                src={searchImg} 
                alt="search"
            />
        </div>
    )
}

export default Input;