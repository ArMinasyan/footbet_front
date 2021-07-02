import styles from './InputConteiner.module.scss'

export function InputConteiner({ label, id, type, placeholder, other }) {
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
                <div className={styles.input_content}>
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
