import styles from './Icon.module.scss'

export function Icon({ src }) {
    return (
        <div className={styles.container}>
            <img src={src} alt="" />
        </div>
    )
}
