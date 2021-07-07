// hooks and helpers
import { useState } from 'react'
// styles
import styles from './Bar.module.scss'
// translation 
import useTranslation from 'next-translate/useTranslation'
//components
import { Login } from './Login/Login'
import { BarItems } from './BarItems/BarItems'
import { Logo } from './Logo/Logo'

export function Bar() {

    const
        { t } = useTranslation('common'),
        translationPath = 'header.',
        translate = (key) => t(`${translationPath}${key}`),
        // login modal configs
        [showLoginModal, setShowLoginModal] = useState(false)

    return (
        <div className={styles.bar_container}>
            <Logo />
            <BarItems
                registration={translate('register')}
                login={translate('login')}
                language={translate('language')}
                registration_path='/registration'
                loginModalHandle={() => setShowLoginModal(true)}
            />
            {showLoginModal && <Login onModalClose={() => setShowLoginModal(false)} />}
        </div>
    )
}
