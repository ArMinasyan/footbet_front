import styles from './InputContainer.module.scss'

export function InputContainer({
    label,
    id,
    type,
    placeholder,
    className='',
    errors,
    ref,
    onClick,
    other }) {

    return (
        <div className={styles.container + ' ' + className}>
            {label &&
                <div className={styles.label_content}>
                    <label htmlFor={id}>
                        <img
                            src={label.src}
                            alt="icon"
                        />
                    </label>
                </div>
            }
            <div className={styles.input_container}>
                <div onClick={onClick} className={errors ? styles.input_error_content : styles.input_success_content}>
                    <input
                        ref={ref}
                        id={id}
                        type={type}
                        placeholder={type !== `date` ? placeholder : undefined}
                        {...other}
                    />
                </div>
            </div>
        </div>
    )
}
