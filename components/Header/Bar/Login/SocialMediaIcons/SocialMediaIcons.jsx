// Icons
import facebook from '/public/images/header/login/facebook.svg'
import gmail from '/public/images/header/login/gmail.svg'
import vk from '/public/images/header/login/vk.svg'
import twitter from '/public/images/header/login/twitter.svg'
// scss
import styles from './SocialMediaIcons.module.scss'

const icons = [
    {
        iconUrl: facebook.src,
        link: "https://www.facebook.com/"
    },
    {
        iconUrl: gmail.src,
        link: "https://accounts.google.com/signin"
    },
    {
        iconUrl: vk.src,
        link: "https://vk.com/login"
    },
    {
        iconUrl: twitter.src,
        link: "https://twitter.com/login"
    }]


export function SocialMediaIcons() {
    return (
        <div className={styles.conteiner}>
            <div className={styles.content}>
                {
                    icons.map(el => {
                        return (
                            <div className={styles.iconContent} key={Math.random() * 10}>
                                <a href={el.link} target="_blank">
                                    <div className={styles.iconBody}>
                                        <img src={el.iconUrl} alt="" className={styles.icon} />
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
