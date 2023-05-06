import styles from "./HomePreview.module.css";

const HomePreview = () => {
    return(
        <div className={styles.preview}>
            <div className={styles.preview__container}>
                <div className= {styles.preview__content}>
                    <span className={styles.preview__title}>ДОСТАВКА ВКУСНЕЙШИХ</span>
                    <span className={styles.preview__title}>БЛЮД за 60 минут</span>
                    <button className={styles.button} onClick={() => console.log(1)}>ЕЩЁ НЕ ПРОБОВАЛИ?</button>
                </div>
            </div>
        </div>
    )
}

export default HomePreview;