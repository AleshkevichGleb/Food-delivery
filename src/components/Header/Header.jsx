import styles from "./Header.module.css"
import Logo from "../UI/logo/Logo"
import Input from "../UI/input/Input";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import "../../index.css";
import { useEffect, useState } from "react";
import Burger from "./Burger/Burger";
import FooterNav from "../Footer/FooterNav/FooterNav";
import { useContext } from "react";
import { AppContext } from "../../App";
import profileImage from "../../assets/images/Profile.svg";
import FormAutarization from "./FormAutarization/FormAutarization";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";

const Header = () => {

    const {fullCount} = useContext(AppContext);
    const [active, setActive] = useState(false);

    const [isActiveForm, setIsActiveForm] = useState(false); 
    const [isShowLogin, setIsShowLogin] = useState(true)
    const [isHasUser, setIsHasUser] = useState(false);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user => {
            if(user) {
                setIsHasUser(true);
            } else {
                setIsHasUser(false);
            }
        }))
    }, [isActiveForm])

    return(
        <>
            {
                
                isActiveForm &&
                <>
                {
                    isShowLogin  
                    ?<Login setIsActiveForm={setIsActiveForm} setIsShowLogin = {setIsShowLogin}/> 
                    :<Signup setIsActiveForm = {setIsActiveForm} setIsShowLogin = {setIsShowLogin}/>
                }
                </>
            }
            <div className={styles.header}>
                <div className={styles.header__container}>
                    <Burger active = {active} setActive = {setActive}/>
                    <div className={styles.logo} onClick={() => active ? setActive(!active) : ''} >
                        <Logo/>
                    </div>
                    <Input/>
                    <div className={active ? 'burger__menu active' : 'burger__menu'} onClick={() => setActive(!active)}>
                        <Contact text = "+7 (917) 510-57-59"/>
                        <div className={active ? 'burger__nav active' : 'burger__nav'}>
                            <FooterNav/>
                        </div>
                    </div>

                    {!isHasUser 
                    ?
                         <div 
                         className={styles.profile}
                         onClick={() => setIsActiveForm(true)}
                        > 
                            <img src={profileImage} alt="profile" />
                            <span>Войти</span>
                         </div>
                    :  
                            <div className={styles.profile}> 
                                <Link state = {true} to = '/profile'>
                                    <img src={profileImage} alt="profile" />
                                </Link>
                            </div>
                    }
                    <Cart items={fullCount}/>
                </div>
            </div>
        </>
    )
}

export default Header;