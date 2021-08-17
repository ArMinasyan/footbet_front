// hooks
import useTranslation from 'next-translate/useTranslation'
// icons
import paypallIcon from '/public/images/payments/paypall.png'
// styles
import styles from './Details.module.scss'

export function Details({ game }) {

    const
        // translation consfigs
        { t } = useTranslation('prediction'),
        translationPath = 'tabs.payments.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.price}>
                <p>
                    {game.price}
                </p>
            </div>
            <div className={styles.choosePaySys}>
                <p>
                    {translate('choosePaySys').toUpperCase()}
                </p>
            </div>
            <div className={styles.choosePaySys_content}>
                <div className={styles.button}>
                    <p>
                        {translate('bankCard')}
                    </p>
                </div>
            </div>
        </div>
    )
}
