import styles from "./PageContainer.module.scss";


const PageContainer = ({children, title}) => {
    return(
        <div className={styles.form__block}>
            {title && <h3 className={styles.form__subtitle}>{title}</h3>}
            {children}
        </div>
    )    
}

export default PageContainer;