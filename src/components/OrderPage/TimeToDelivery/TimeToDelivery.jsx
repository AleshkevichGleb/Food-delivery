import ErrorFormValidate from "../ErrorFormValidate/ErrorFormValidate";
import PageContainer from "../PageContainer/PageContainer";
import styles from "./TimeToDelivery.module.scss";
import { useState } from "react";

const TimeToDelivery = ({data, handleData, error}) => {
    const [isToTime, setIsToTime] = useState(false);
    const [persons, setPersons] = useState(1);

    const getHandleData = (event) => {
        event.preventDefault();
        handleData(event);
    }

    async function decrementPersons(event) {
        event.preventDefault();
        if(persons>1) {
            await setPersons(persons-1);
            getHandleData(event);
        }
    }
    
    async function incrementPersons(event){
        event.preventDefault();
        await setPersons(persons+1);
        getHandleData(event)
    }
    return(
       <PageContainer title = '4. Когда доставить'>
            <div className={styles.form__group}>
                <div className={styles.changeButtonsContainer}>
                    <button 
                        className= {isToTime? styles.changeButton : [styles.changeButton, styles.changeButton___checked].join(' ')}
                        value="soon"
                        name = "time"
                        onClick={(event) => {
                            getHandleData(event)
                            setIsToTime(false)
                        }}
                    >
                        В ближайшее время
                    </button>
                    <button 
                        className= {isToTime?[styles.changeButton, styles.changeButton___checked].join(' ') : styles.changeButton}
                        name = "time"
                        value="not indicated"
                        onClick={(event) => {
                            getHandleData(event)
                            setIsToTime(true)
                        }}
                    >
                        Ко времени
                    </button>
                </div>
                {isToTime && 
                 <div className={styles.input__group}>
                    <input 
                        className= {styles.input}
                        placeholder=" "
                        id = "timeTo" 
                        type="text"
                        name = "time" 
                        onChange={getHandleData}
                    />
                    <label htmlFor="timeTo" className={styles.label}>Укажите время</label>
                </div>
                }
            </div>

            <div className={styles.form__group}>
                <div className={styles.person__container}>
                    <span>Кол-во персон</span>
                    <div className={styles.persons__counter}>
                        <button className={styles.button__minus} name = "persons" value={persons} onClick={decrementPersons}>-</button>
                        <span className={styles.counter}>{persons}</span>
                        <button className={styles.button__plus} name = "persons" value={persons} onClick={incrementPersons}>+</button>
                    </div>
                </div>
            </div>

            <div className={styles.recall__group}>
                <h3 className={styles.underTitle}>Хотите мы перезвоним?</h3>
                <div className={styles.recall__container}>
                    <label className={styles.recall__label}>
                        <input 
                            checked = {data.recall === 'noRecall'} 
                            className = {styles.radio} 
                            type="radio" 
                            name = "recall" 
                            value = "noRecall" 
                            onChange={handleData}
                        />
                        Не перезванивать
                        <span></span>
                    </label>
                    <label className={styles.recall__label}>
                        <input 
                            checked = {data.recall === 'Recall'} 
                            className = {styles.radio} 
                            type="radio" 
                            name = "recall" 
                            value = "Recall" 
                            onChange={handleData}
                        />
                        Потребуется звонок оператора
                        <span></span>
                    </label>
                </div>
            </div>
        </PageContainer>
    )
}

export default TimeToDelivery;