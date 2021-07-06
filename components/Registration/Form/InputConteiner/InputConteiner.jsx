import styles from './InputConteiner.module.scss'

export function InputConteiner({
    label,
    id,
    type,
    placeholder,
    errors,
    other }) {

    return (
        <div className={styles.conteiner}>
            <div className={styles.label_content}>
                <label htmlFor={id}>
                    <img
                        src={label.src}
                        alt=""
                    />
                </label>
            </div>
            <div className={styles.input_container}>
                <div className={errors ? styles.input_error_content : styles.input_success_content}>
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        {...other}
                    />
                </div>
            </div>
        </div>
    )
}
