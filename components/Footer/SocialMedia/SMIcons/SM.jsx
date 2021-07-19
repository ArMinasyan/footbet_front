// styles
import styles from './SM.module.scss'
// icons
import phone from '/public/images/header/SocialMedia/phone.svg'
import facebook from '/public/images/header/SocialMedia/facebook.svg'
import telegram from '/public/images/header/SocialMedia/telegram.svg'
import watsup from '/public/images/header/SocialMedia/watsup.svg'
import instagram from '/public/images/header/SocialMedia/instagram.svg'
import viber from '/public/images/header/SocialMedia/viber.svg'
// components
import { Icon } from '../common/Icon/Icon'


export function SM() {

    const
        // config
        icons = [
            {
                key: Math.random(),
                src: phone.src,
            },
            {
                key: Math.random(),
                src: facebook.src,
            },
            {
                key: Math.random(),
                src: watsup.src,
            },
            {
                key: Math.random(),
                src: instagram.src,
            },
            {
                key: Math.random(),
                src: viber.src,
            },
            {
                key: Math.random(),
                src: telegram.src,
                lastElement: true
            },
        ]

    return (
        <>
            <div className={styles.container}>
                {
                    icons.map(el => (
                        <Icon
                            key={el.key}
                            src={el.src}
                            elements={icons.length}
                            lastElement={el.lastElement && el.lastElement}
                        />
                    ))
                }
            </div>
        </>
    )
}
