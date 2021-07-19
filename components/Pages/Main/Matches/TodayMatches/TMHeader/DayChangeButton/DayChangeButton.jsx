import styles from './DayChangeButton.module.scss'
// hooks and helpers
import useTranslation from 'next-translate/useTranslation'

export function DayChangeButton({
    name,
    locationInMainPage,
    date,
    active = null,
    click }) {
        
    const
        // translation consfigs
        { t } = useTranslation('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div
                className={active ? styles.active_name : styles.name}
                onClick={click}
            >
                <p>
                    {
                        translate(name)
                    }
                </p>
            </div>
            <div className={active ? styles.active_date : styles.date}>
                <p>
                    {
                        date
                    }
                </p>
            </div>
        </div>
    )
}
