// styles
import styles from './TabHeader.module.scss'
// translations
import useTranslation from 'next-translate/useTranslation'

export function TabHeader() {

    const
        // translation consfigs
        { t } = useTranslation('games'),
        translationPath = 'tabs.header.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.for_tablets}>
                <p>
                    {translate('gamesHistory')}
                </p>
            </div>
            <div className={styles.content}>
                <div>
                    <p>
                        {translate('price').toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    )
}
