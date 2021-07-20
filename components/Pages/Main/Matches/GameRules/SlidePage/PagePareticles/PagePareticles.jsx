// styles 
import styles from './PageParticales.module.scss'

export function PageParticles({
    title,
    body
}) {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                {title}
            </p>
            <p className={styles.body}>
                {body}
            </p>
        </div>
    )
}
