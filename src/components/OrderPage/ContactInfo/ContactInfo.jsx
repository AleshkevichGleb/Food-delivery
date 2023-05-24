import { useRef } from "react";
import ErrorFormValidate from "../ErrorFormValidate/ErrorFormValidate";
import styles from "./ContactInfo.module.scss";
import PageContainer from "../PageContainer/PageContainer";

const ContactInfo = ({data, handleData, error}) => {

    const ref = useRef();

    async function writePhoneSymbols({target}){
        let {value} = target;
        value = await value.replace(/[^\d\+\-\(\)]/gi,'')
        ref.current.value = value;
    }

    return(
        <PageContainer title='1. Контактная информация'>
            <div className={styles.form__group}>
                <div className={styles.input__group}>
                    <input 
                        className= {styles.input}
                        placeholder=" "
                        id = "name" 
                        name = "name" 
                        type="text" 
                        value={data.name}
                        onChange={handleData}
                    />
                    <label htmlFor="name" className={styles.label}>Имя</label>
                    <ErrorFormValidate error = {error} name = 'name'/>
                </div>

                <div className={styles.input__group}>
                    <input 
                        className= {styles.input}
                        placeholder=" "
                        ref = {ref}
                        type="tel" 
                        id = "phone"
                        name = "phone"
                        value={data.phone}
                        onChange={event =>{ 
                            handleData(event);
                            writePhoneSymbols(event);
                        }}
                    />
                    <label htmlFor="phone" className={styles.label}>Телефон</label>
                    <ErrorFormValidate error={error} name = 'phone'/>
                </div>
            </div>
        </PageContainer>
    )
}

export default ContactInfo;