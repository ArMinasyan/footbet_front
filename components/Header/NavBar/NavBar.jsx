// hooks and helpers
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
// styles
import styles from './NavBar.module.scss'
// translation 
import useTranslation from 'next-translate/useTranslation'
// componetns
import { Button } from './Button/Button'
import Contacts from '../../Pages/Contacts/Contacts'



export function NavBar() {


    const
        //states
        [showContactsModal, setShowContactsModal] = useState(false),
        { t } = useTranslation('common'),
        translationPath = 'header.navBar.',
        translate = (key) => t(`${translationPath}${key}`),
        // router
        router = useRouter(),
        // nav bar buttons configs
        buttons = [
            {
                key: Math.random(),
                frstContent: translate('main'),
                href: '/'
            },
            {
                key: Math.random(),
                frstContent: translate('games'),
                href: '/games'
            },
            {
                key: Math.random(),
                frstContent: translate('statistics.frs'),
                secContent: translate('statistics.sec'),
                href: '/statistics'
            },
            {
                key: Math.random(),
                frstContent: translate('prediction.frs'),
                secContent: translate('prediction.sec'),
                href: '/prediction'
            },
            {
                key: Math.random(),
                frstContent: translate('testimonials'),
                href: '/testimonials'
            },
            {
                key: Math.random(),
                frstContent: translate('aboutUs'),
                href: '/aboutUs'
            },
            {
                key: Math.random(),
                frstContent: translate('contacts'),
                href: '',
                click: () => setShowContactsModal(true)
            },
        ]

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    {
                        buttons.map(el => (
                            <Button
                                contentFrstP={el.frstContent}
                                contentSecP={el.secContent}
                                href={el.href}
                                key={el.key}
                                active={router.pathname === el.href ? 'true' : null }
                                click={el.click && el.click}
                            />
                        ))
                    }
                </div>
            </div>
            {showContactsModal && <Contacts
                opened={showContactsModal}
                onModalClose={() => setShowContactsModal(false)}
            />}
        </>

    )
}