// translations
import useTranslation from 'next-translate/useTranslation'
// styles 
import styles from './RowTitle.module.scss'

export function RowTitle({ content }) {
    return (
        <div className={styles.container} >
            <p>
                {
                    content
                }
            </p>
        </div>
    )
}
