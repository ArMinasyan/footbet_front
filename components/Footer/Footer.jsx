//
import { Ball } from './Ball/Ball'
// styles
import styles from './Footer.module.scss'
import { Navigation } from './Navigation/Navigation'
import { SocialMedia } from './SocialMedia/SocialMedia'

export function Footer() {
    return (
        <div className={styles.container}>
            <Ball />
            <div className={styles.content}>
                <Navigation />
                <SocialMedia />
            </div>
        </div>
    )
}
