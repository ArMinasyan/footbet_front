// translations
import useTranslation from 'next-translate/useTranslation'
// styles 
import styles from './RowTitle.module.scss'

export function RowTitle({ content, locationInMainPage }) {

    const
        // translation consfigs
        { t } = useTranslation('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container} >
            <p>
                {
                    content ? translate(content) : ""
                }
            </p>
        </div>
    )
}
