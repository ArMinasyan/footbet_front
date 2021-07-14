// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// styles 
import styles from './Title.module.scss'


export function Title() {

    const
        // translation consfigs
        { t } = useTranslation('home'),
        translationPath = 'news.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <p>
                {
                    translate('title')
                }
            </p>
        </div>
    )
}
