import { Link } from "react-router-dom";
import styles from "./FooterNav.module.css";

const FooterNav = () => {
    return(
        <nav className={styles.nav}>
            <Link to = '/'><span className={styles.nav__item}>О ресторане</span></Link>
            <Link to = '/delivery' state = {true}><span className={styles.nav__item}>Условия доставки</span></Link>
            <Link to = '/'><span className={styles.nav__item}>Возврат товара</span></Link>
            <Link to = '/promotion' state = {true}><span className={styles.nav__item}>Акции</span></Link>
        </nav>
    )
}

export default FooterNav;