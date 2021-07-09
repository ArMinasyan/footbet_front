// styles
import styles from './NavBar.module.scss'
// translation 
import useTranslation from 'next-translate/useTranslation'
// componetns
import { Button } from './Button/Button'

export function NavBar() {

    const
        { t } = useTranslation('common'),
        translationPath = 'header.navBar.',
        translate = (key) => t(`${translationPath}${key}`),
        // nav bar buttons configs
        buttons = [
            {
                frstContent: translate('main'),
                href: '/'
            },
            {
                frstContent: translate('games'),
                href: '/games'
            },
            {
                frstContent: translate('statistics.frs'),
                secContent: translate('statistics.sec'),
                href: '/statistics'
            },
            {
                frstContent: translate('prediction.frs'),
                secContent: translate('prediction.sec'),
                href: '/prediction'
            },
            {
                frstContent: translate('testimonials'),
                href: '/testimonials'
            },
            {
                frstContent: translate('aboutUs'),
                href: '/aboutUs'
            },
            {
                frstContent: translate('contacts'),
                href: '/contacts'
            },
        ]

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {
                    buttons.map(el => (
                        <Button
                            contentFrstP={el.frstContent}
                            contentSecP={el.secContent}
                            href={el.href}
                        />
                    ))
                }
            </div>
        </div>
    )
}
