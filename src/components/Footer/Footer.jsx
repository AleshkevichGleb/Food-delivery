import styles from "./Footer.module.css";
import FooterNav from "./FooterNav/FooterNav";
import FooterSettings from "./FooterSettings/FooterSettings";
import FooterWeather from "./FooterWeather/FooterWeather";

const Footer = () => {


    return(
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <div className= {styles.footer__toTopContainer}>
                    <div className={styles.footer__toTop}></div>
                 </div>  
                <div className={styles.footer__info}>
                    <FooterSettings/>
                    <FooterNav/>
                    <FooterWeather/>
                </div>
            </div>
        </div>
    )
}

export default Footer;