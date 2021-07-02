import styles from './Button.module.scss'

export function Button({title}) {
    return (
        <div className={styles.conteiner}>
            <button>
                {title}
            </button>
        </div>
    )
}
