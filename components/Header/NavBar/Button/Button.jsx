import Link from 'next/link'
// styles
import styles from './Button.module.scss'



export function Button({
    href,
    contentFrstP,
    contentSecP = null,
    active }) {
    return (
        <div className={`${styles.container} ${active && styles.active}`}>
            <div className={styles.content}>
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
