import { useState } from "react"

export const useValidate = () => {
    const [error, setError] = useState({});


    const validate = (name, value) => {
        switch(name) {
            case 'name': {
                if(!/^[a-zA-Za-яА-Я]{2,16}$/.test(value)) {
                    setError({...error, name: 'Enter a valid name'})
                } else {
                    setError({...error, name: ''});
                }

                break;
            }

            case 'phone': {
                if(!/^(\+?375|80)\(?(29|25|44|33)\)?(\d{3})(\d{2})(\d{2})$/.test(value)) {
                    setError({...error, phone: 'Enter a valid phone number'})
                } else {
                    setError({...error, phone: ''})
                }
                break;
            }

            case 'street': {
                if(!/^[a-zA-Za-яА-Я]{5,25}$/.test(value)) {
                    setError({...error, street: 'Enter a valid street'})
                } else {
                    setError({...error, street: ''})
                }
                break;
            }

            case 'house': {
                if(!/^[0-9]{0,3}\s?[к|К|/]?\s?[0-9]{1}$/.test(value)) {
                    setError({...error, house: 'Enter a valid number of house'})
                } else {
                    setError({...error, house: ''})
                }
                break;
            }

            case 'flat': {
                if(!/^[0-9 /]{0,4}$/.test(value)) {
                    setError({...error, flat: 'Enter a valid number of office'})
                } else {
                    setError({...error, flat: ''})
                }
                break;
            }

            case 'entrance': {
                if(!/^[0-9]{0,2}$/.test(value)) {
                    setError({...error, entrance: 'Enter a valid entrance'})
                } else {
                    setError({...error, entrance: ''})
                }
                break;
            }

            case 'floor': {
                if(!/^[0-9]{0,2}$/.test(value)) {
                    setError({...error, floor: 'Enter a valid floor'})
                } else {
                    setError({...error, floor: ''})
                }
                break;
            }

            case 'surrender_of_money': {
                if(!/^[0-9 коп р.]{0,10}$/.test(value)) {
                    setError({...error, surrender_of_money: 'Enter a valid cash'})
                } else {
                    setError({...error, surrender_of_money: ''})
                }
                break;
            }

            default: break;
        }
    }   

    return{error, validate}
}