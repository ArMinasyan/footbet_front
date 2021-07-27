//
import { useRouter } from 'next/dist/client/router'
import { Ball } from './Ball/Ball'
// styles
import styles from './Footer.module.scss'
import { Navigation } from './Navigation/Navigation'
import { SocialMedia } from './SocialMedia/SocialMedia'
// icon
import ballIcon from '/public/images/personal/ball.png'

export function Footer() {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Ball />
            <div className={styles.content}>
                <Navigation />
                <SocialMedia />
            </div>
            {router.pathname === '/personal' &&
                <div className={styles.ball}>
                    <img src={ballIcon.src} alt="ball-icon" />
                </div>
            }
        </div>
    )
}
