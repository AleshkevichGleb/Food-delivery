import styles from "./ErrorFormValidate.module.scss";

const ErrorFormValidate = ({error, name}) => {
    return <span className={styles.text}>{error[name]}</span>
}

export default ErrorFormValidate;