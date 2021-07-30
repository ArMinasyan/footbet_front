// styles
import styles from './TabHeader.module.scss'
// translations
import useTranslation from 'next-translate/useTranslation'

export function TabHeader() {

    const
        // translation consfigs
        { t } = useTranslation('statistics'),
        translationPath = 'tab.header.',
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
                        {translate('prediction').toUpperCase()}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('date').toUpperCase()}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('time').toUpperCase()}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('score').toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    )
}
