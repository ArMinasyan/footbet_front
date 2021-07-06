// styles 
import styles from './BarItems.module.scss'
// icons
import register_icon from '/public/images/header/register.png'
import login_icon from '/public/images/header/login.png'
import rus_flag from '/public/images/header/flags/rus.png'

export function BarItems({ registration, login, language }) {

    return (
        <div className={styles.bar_item_container}>
            <div className={styles.auth_buttons}>
                <div className={styles.sign_up_button}>
                    <img src={register_icon.src} alt="" />
                    <span>
                        {
                            registration
                        }
                    </span>
                </div>
                <div className={styles.sign_in_button}>
                    <img src={login_icon.src} alt="" />
                    <span>
                        {
                            login
                        }
                    </span>
                </div>
            </div>
            <div className={styles.vertical_border}>|</div>
            <div className={styles.lang_button}>
                <span>
                    {
                        language
                    }
                </span>
                <img src={rus_flag.src} alt="" />
            </div>
        </div>
    )
}
