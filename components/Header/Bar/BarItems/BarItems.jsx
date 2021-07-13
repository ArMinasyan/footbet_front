// hooks and helpers
import { languages } from './LanguageDropConfigs/lang-configs'
// styles 
import styles from './BarItems.module.scss'
// components
import Link from 'next/link'
import { LanguageDrop } from './LanguageDrop/LanguageDrop'
// icons
import register_icon from '/public/images/header/register.png'
import login_icon from '/public/images/header/login.png'
import { useState } from 'react'


export function BarItems({
    registration,
    login,
    registration_path,
    loginModalHandle,
    bar_items }) {

    

    const
        languages_data = languages(),
        [showDrop, setShowDrop] = useState(false),
        [languagesTitle, setLanguagesTitle] = useState(languages_data[1]),
        changeLangTitle = (event) => {
            let lang_title_data = languages_data.filter(el => el.lang === event.target.className)
            setLanguagesTitle(lang_title_data[0])
            setShowDrop(false)
        }

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
                    onClick={() => setShowDrop(true)}
                >
                    <span>
                        {
                            languagesTitle.contentOnTitle
                        }
                    </span>
                    <img
                        src={languagesTitle.icon}
                        alt="lang-flag"
                    />
                </div>
                {showDrop && <LanguageDrop
                    click={changeLangTitle}
                    onClose={() => setShowDrop(false)}
                    data={languages_data}
                />}
            </div>
        </div >
    )
}
