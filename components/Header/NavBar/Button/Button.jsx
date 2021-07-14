import Link from 'next/link'
// styles
import styles from './Button.module.scss'



export function Button({
    href,
    contentFrstP,
    contentSecP = null,
    active,
    click = null }) {
    return (
        <div className={`${styles.container} ${active && styles.active}`}>
            <div className={styles.content}
                onClick={click}
            >
                <Link href={href}>
                    <pre>
                        {
                            contentFrstP
                        }
                        <br />
                        {
                            contentSecP
                        }
                    </pre>
                </Link>
            </div>
        </div>
    )
}
