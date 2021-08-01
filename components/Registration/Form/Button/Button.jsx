import styles from './Button.module.scss'

export function Button({content, type = null, onClick = null}) {
    return (
        <div className={styles.conteiner}>
            <button type={type} onClick={ onClick } >
                {content}
            </button>
        </div>
    )
}
