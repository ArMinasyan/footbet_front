// styles 
import styles from './BarItems.module.scss'
// components
import Link from 'next/link'
import { LanguageDrop } from './LanguageDrop/LanguageDrop'
// icons
import register_icon from '/public/images/header/register.png'
import login_icon from '/public/images/header/login.png'
import rus_flag from '/public/images/header/flags/rus.png'
import { useState } from 'react'


export function BarItems({
    registration,
    login,
    language,
    registration_path,
    loginModalHandle,
    bar_items }) {

    const
        [showDrop, setShowDrop] = useState(false)
    console.log(showDrop);

    return (
        <div className={`${styles.bar_item_container} ${bar_items}`}>
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
                <div
                    className={styles.lang_button_content}
                    style={showDrop ? { display: 'none' } : null}
                    onClick={() => setShowDrop(!showDrop)}
                >
                    <span>
                        {
                            language
                        }
                    </span>
                    <img
                        src={rus_flag.src}
                        alt="lang-flag"
                    />
                </div>
                {showDrop && <LanguageDrop onClose={() => setShowDrop(false)} />}
            </div>
        </div >
    )
}
