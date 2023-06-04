import { auth } from "../../../firebase/firebase";
import FormAutarization from "../FormAutarization/FormAutarization"
import styles from "../Signup/Signup.module.css";
import { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";

const Login = ({setIsActiveForm, setIsShowLogin}) => {
    const [authData, setAuthData] = useState({
        email: '',
        password: ''
    }) 

    const handleAuthData = ({target}) => {
        const {name, value} = target;
        setAuthData({...authData, [name]: value});   
    }

    const [error, setError] = useState('');

    const onLogin = async(event) => {
        event.preventDefault();

        await signInWithEmailAndPassword(auth, authData.email, authData.password)
                .then(() => {
                    setIsActiveForm(false);
                }).catch(err => {
                    const message = err.message;
                    setError(message);
                })
    }

    return (
        <div className={styles.container}>
            <div className={styles.popUp}>
                <span className={styles.popUp_title}>Вход в аккаунт</span>
                <span className={styles.closeForm} onClick={() => setIsActiveForm(false)}>&#10006;</span>
                <FormAutarization 
                    authData = {authData}
                    handleAuthData = {handleAuthData}
                    setIsActiveForm = {setIsActiveForm}
                    buttonText = "Войти"
                    onSubmit = {onLogin}
                    error = {error}
                />
                <div>   
                    <span className={styles.changeFormText} onClick={() => setIsShowLogin(false)}>Зарегестривароваться</span>
                </div>
            </div>
        </div>
    )
}

export default Login;