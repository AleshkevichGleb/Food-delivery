import styles from "./Header.module.css"
import Logo from "../UI/logo/Logo"
import Input from "../UI/input/Input";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import "../../index.css";
import { useState } from "react";
import Burger from "./Burger/Burger";
import FooterNav from "../Footer/FooterNav/FooterNav";

const Header = ({fullCount}) => {

    const [active, setActive] = useState(false);

    return(
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
                <Cart items = {4}/>
            </div>
        </div>
    )
}

export default Header;