// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './PGSButton.module.scss'

export function PGSButton({ }) {

    const
        // translations
        { t } = useTranslation('personal'),
        translationPath = 'board.',
        translate = (key) => t(`${translationPath}${key}`)


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span>
                    {translate('PGButton')}
                </span>
            </div>
        </div>
    )
}
