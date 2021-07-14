// styles
import styles from './Button.module.scss'

export function Button({
    content,
    contentSecP = null,
    active,
    click = null }) {
    return (
        <div className={`${styles.container} ${active && styles.active}`}>
            <div className={styles.content}
                onClick={click}
            >
                <pre>
                    {
                        content
                    }
                    <br />
                    {
                        contentSecP
                    }
                </pre>
            </div>
        </div>
    )
}
