// styles 
import styles from './BarItems.module.scss'
// components
import Link from 'next/link'
// icons
import register_icon from '/public/images/header/register.png'
import login_icon from '/public/images/header/login.png'
import rus_flag from '/public/images/header/flags/rus.png'

export function BarItems({ registration, login, language, registration_path, loginModalHandle }) {

    return (
        <div className={styles.bar_item_container}>
            <div className={styles.auth_container}>
                <div className={styles.auth_buttons}>
                    <div className={styles.sign_up_button}>
                        <Link href={registration_path}>
                            <img src={register_icon.src} alt="" />
                        </Link>
                        <Link href={registration_path}>
                            <span>
                                {
                                    registration
                                }
                            </span>
                        </Link>
                    </div>
                    <div
                        className={styles.sign_in_button}
                        onClick={loginModalHandle}
                    >
                        <img src={login_icon.src} alt="" />
                        <span>
                            {
                                login
                            }
                        </span>
                    </div>
                </div>
            </div>
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
