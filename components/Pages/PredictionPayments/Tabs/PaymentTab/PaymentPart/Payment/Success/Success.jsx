// hooks
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './Success.module.scss'
// icon 
import success from '/public/images/payments/success.png'

export function Success() {

    const
        // translation consfigs
        { t } = useTranslation('prediction'),
        translationPath = 'tabs.payments.cardForm.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>{translate('thanks')}</p>
                <img src={success.src} alt="" />
            </div>
        </div>
    )
}
