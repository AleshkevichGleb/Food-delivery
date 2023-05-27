import styles from "./Header.module.css"
import Logo from "../UI/logo/Logo"
import Input from "../UI/input/Input";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import "../../index.css";
import { useState } from "react";
import Burger from "./Burger/Burger";
import FooterNav from "../Footer/FooterNav/FooterNav";
import ButtonLink from "../../common/ButtonLink/ButtonLink";
import buyImage from "../../assets/images/buy.svg"
import { useContext } from "react";
import { AppContext } from "../../App";

const Header = () => {

    const {fullCount} = useContext(AppContext);
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
                {/* <ButtonLink items={fullCount} src = {buyImage} title = 'Корзина' url = '/cart'/> */}
                <Cart items={fullCount}/>
            </div>
        </div>
    )
}

export default Header;