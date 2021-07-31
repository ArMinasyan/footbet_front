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
                url: "tel:+37498645457"
            },
            {
                key: Math.random(),
                src: facebook.src,
                url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/"
            },
            {
                key: Math.random(),
                src: watsup.src,
                url: "https://api.whatsapp.com/send?phone=+37498645457"
            },
            {
                key: Math.random(),
                src: instagram.src,
                url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link"
            },
            {
                key: Math.random(),
                src: viber.src,
                url: "viber://chat?number=+37498645457"
            },
            {
                key: Math.random(),
                src: telegram.src,
                url: "https://telegram.me/ermaann",
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
                            url={el.url}
                            elements={icons.length}
                            lastElement={el.lastElement && el.lastElement}
                        />
                    ))
                }
            </div>
        </>
    )
}
