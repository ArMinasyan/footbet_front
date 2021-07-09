import Link from 'next/link'
// styles
import styles from './Button.module.scss'

export function Button({
    href,
    contentFrstP,
    contentSecP = null }) {
    return (
        <div className={styles.container}>
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
