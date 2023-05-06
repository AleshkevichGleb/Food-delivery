import styles from "./Header.module.css"
import Logo from "../UI/logo/Logo"
import Input from "../UI/input/Input";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.header__container}>
                <Logo/>
                <div className={styles.header__block}>
                    <Input/>
                    <Contact text = "+7 (917) 510-57-59"/>
                </div>
                <Cart items = {3}/>
            </div>
        </div>
    )
}

export default Header;