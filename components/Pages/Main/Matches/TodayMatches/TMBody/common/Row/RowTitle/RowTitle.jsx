import styles from './RowTitle.module.scss'

export function RowTitle({ content }) {
    return (
        <div className={styles.container}>
            <p>
                {
                    content
                }
                Title
            </p>
        </div>
    )
}
