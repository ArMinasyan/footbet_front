// styles
import styles from './TabHeader.module.scss'
// translations
import useTranslation from 'next-translate/useTranslation'

export function TabHeader() {

    const
        // translation consfigs
        { t } = useTranslation('prediction'),
        translationPath = 'tabs.header.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <p>
                        {translate('prediction').toUpperCase()}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('type').toUpperCase()}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('date').toUpperCase()}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('coeficent').toUpperCase()}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('price').toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    )
}
