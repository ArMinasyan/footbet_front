// hooks
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './Pending.module.scss'
// icon 
import pending from '/public/images/payments/pending.png'

export function Pending() {

    const
        // translation consfigs
        { t } = useTranslation('prediction'),
        translationPath = 'tabs.payments.cardForm.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>{translate('panding')}</p>
                <img src={pending.src} alt="" />
            </div>
        </div>
    )
}
