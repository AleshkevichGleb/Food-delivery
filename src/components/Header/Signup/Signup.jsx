import { useState } from "react"
import FormAutarization from "../FormAutarization/FormAutarization"
import styles from "./Signup.module.css";
import {auth} from "../../../firebase/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"

const Signup = ({setIsActiveForm, setIsShowLogin}) => {
    const [authData, setAuthData] = useState({
        email: '',
        password: ''
    }) 

    const [error, setError] = useState('');
    const handleAuthData = ({target}) => {
        const {name, value} = target;
        setAuthData({...authData, [name]: value});   
    }

    const onSignUp = async(event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, authData.email, authData.password)
        } catch(err) {
            const message = err.message;
            setError(message)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.popUp}>
                <span className={styles.popUp_title}>Регистрация</span>
                <span className={styles.closeForm} onClick={() => setIsActiveForm(false)}>&#10006;</span>
                <FormAutarization 
                    authData = {authData}
                    handleAuthData = {handleAuthData}
                    setIsActiveForm = {setIsActiveForm}
                    buttonText = "Зарегестрироваться"
                    onSubmit = {onSignUp}
                    error = {error}
                />
                <div>   
                    <span className={styles.changeFormText} onClick={() => setIsShowLogin(true)}>Использовать существующий аккаунт</span>
                </div>
            </div>
        </div>
    )
}

export default Signup;