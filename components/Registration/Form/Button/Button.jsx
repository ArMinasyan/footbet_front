import styles from './Button.module.scss'

export function Button({content}) {
    return (
        <div className={styles.conteiner}>
            <button>
                {content}
            </button>
        </div>
    )
}
