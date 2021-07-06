// styles
import styles from './Bar.module.scss'
// translation 
import useTranslation from 'next-translate/useTranslation'
//components
import { BarItems } from './BarItems/BarItems'
import { Logo } from './Logo/Logo'

export function Bar() {

    const
        { t } = useTranslation('common'),
        translationPath = 'header.',
        translate = (key) => t(`${translationPath}${key}`)

    return (
        <div className={styles.bar_container}>
            <Logo />
            <BarItems
                registration={translate('register')}
                login={translate('login')}
                language={translate('language')}
            />
        </div>
    )
}
