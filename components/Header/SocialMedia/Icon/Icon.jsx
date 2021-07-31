import styles from './Icon.module.scss'

export function Icon({ src, click, id }) {
    return (
        <div className={styles.container} id={id}>
            <img
                src={src}
                alt={`icons-${src}`}
                onClick={click}
            />
        </div>
    )
}
