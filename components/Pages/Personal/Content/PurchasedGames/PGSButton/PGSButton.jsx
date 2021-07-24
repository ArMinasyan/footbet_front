// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './PGSButton.module.scss'

export function PGSButton({ active, click }) {

    const
        // translations
        { t } = useTranslation('personal'),
        translationPath = 'board.',
        translate = (key) => t(`${translationPath}${key}`)


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span
                    className={active ? styles.active : undefined}
                    onClick={click}
                >
                    {translate('PGButton')}
                </span>
            </div>
        </div>
    )
}
