import preloaderImage from "../../assets/images/loader-icon.svg";
import styles from "./Preloader.module.css";
const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloaderImage} alt="preloader" />
        </div>
    )
}

export default Preloader;