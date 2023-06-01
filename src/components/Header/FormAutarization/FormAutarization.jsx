import { useEffect } from "react";
import styles from "./FormAutarization.module.scss";
import Button from "../../../common/Button/Button";

const FormAutarization = ({setIsActiveForm, handleAuthData, authData, buttonText, onSubmit, error}) => {

    useEffect(() => {
        const closedForm = (event) => {
            if(event.key === 'Escape') {
                setIsActiveForm(false)
            }
        }
        window.addEventListener("keyup", event => closedForm(event) )
    },[])


    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <span style={{color: 'red'}}>{error}</span>
                <div className={styles.form__inputGroup}> 
                    <input 
                        className={styles.form__input}
                        type="email" 
                        name = "email"
                        id = "email"
                        placeholder=" "
                        value = {authData.email}
                        onChange={handleAuthData}
                    />
                    <label htmlFor="email" className={styles.form__label}>Email</label>
                </div>
                <div className={styles.form__inputGroup}> 
                    <input 
                        className={styles.form__input}
                        type="password" 
                        name = "password"
                        id = "password"
                        placeholder=" "
                        value = {authData.password}
                        onChange={handleAuthData}
                    />
                    <label htmlFor="password" className={styles.form__label}>Password</label>
                </div>
                <Button 
                    addStyles={styles.button} 
                    title = {buttonText}
                    onClick={onSubmit}
                />
            </form>
        </div>
    )
}

export default FormAutarization;