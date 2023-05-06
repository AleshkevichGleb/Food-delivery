import styles from "./Footer.module.css";
import FooterNav from "./FooterNav/FooterNav";
import FooterSettings from "./FooterSettings/FooterSettings";

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <a href = '#inputAddress' className= {styles.footer__toTopContainer}>
                    <div className={styles.footer__toTop}></div>
                </a>  
                <FooterSettings/>
                <FooterNav/>
            </div>
        </div>
    )
}

export default Footer;