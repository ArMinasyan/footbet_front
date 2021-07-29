import styles from './Icon.module.scss'

export function Icon({ src, click}) {
    return (
        <div className={styles.container}>
            <img 
                src={src}
                alt={`icons-${src}`}
                onClick={click}
            />
        </div>
    )
}
