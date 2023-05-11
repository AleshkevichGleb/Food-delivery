import { Link } from "react-router-dom";
import Logo from "../../UI/logo/Logo"

import styles from "./FooterSettings.module.css";

const FooterSettings = () => {
    let date = new Date();
    date = date.getFullYear();

    return(
        <div className={styles.footer__logoContainer}>
            <Logo/>
            <span className={styles.footer__rootsText}>
                © ООО СК «АПШЕРОН» Все права защищены. 2010-{date}
            </span>
            <div className={styles.footer__settings}>
                <Link to ='/' className= {styles.footer__settingsText}>Пользовательское соглашение</Link>
                <Link to ='/'className= {styles.footer__settingsText}>Карта сайта</Link>
                <Link to ='/'className= {styles.footer__settingsText}>Политика конфиденциальности</Link>
            </div>
        </div>
    )
}

export default FooterSettings;