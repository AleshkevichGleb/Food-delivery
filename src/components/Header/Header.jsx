import styles from "./Header.module.css"
import Logo from "../UI/logo/Logo"
import Input from "../UI/input/Input";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import "../../index.css";
import { useEffect, useState } from "react";
import Burger from "./Burger/Burger";
import FooterNav from "../Footer/FooterNav/FooterNav";
import profileImage from "../../assets/images/Profile.svg";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calc_cart_count } from "../../reduxToolkit/fullCartCountSlice";

const Header = () => {
    const fullCartCount = useSelector(state => state.fullCountCartChange.count);
    // console.log();
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
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

                        <div className={active ? 'burger__nav active' : 'burger__nav'}>
                            <FooterNav/>
                        </div>
                    </div>

                    
                    <Cart items={fullCartCount}/>
                </div>
            </div>
        </>
    )
}

export default Header;