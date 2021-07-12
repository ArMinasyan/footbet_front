// styles
import styles from './SocialMedia.module.scss'
// components
import { Icon } from './Icon/Icon'
// icons
import phone from '/public/images/header/SocialMedia/phone.svg'
import facebook from '/public/images/header/SocialMedia/facebook.svg'
import telegram from '/public/images/header/SocialMedia/telegram.svg'
import watsup from '/public/images/header/SocialMedia/watsup.svg'
import instagram from '/public/images/header/SocialMedia/instagram.svg'
import viber from '/public/images/header/SocialMedia/viber.svg'

export function SocialMedia() {

    const
        icons = [
            {
                key: Math.random(),
                src: phone.src
            },
            {
                key: Math.random(),
                src: facebook.src
            },
            {
                key: Math.random(),
                src: telegram.src
            },
            {
                key: Math.random(),
                src: watsup.src
            },
            {
                key: Math.random(),
                src: instagram.src
            },
            {
                key: Math.random(),
                src: viber.src
            },
        ]

    return (
        <div className={styles.container}>
            {
                icons.map(el => (
                    <Icon
                        key={el.key}
                        src={el.src}
                    />
                ))
            }
        </div>
    )
}
