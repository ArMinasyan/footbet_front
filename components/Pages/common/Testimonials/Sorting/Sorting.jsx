// hooks
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './Sorting.module.scss'

export function Sorting({
    sortingText,
    dateSortingText,
    rateSorting,
    sortType,
    sortByDate,
    sortByRate,
    dateActive
}) {

    const
        { t } = useTranslation(`home`),
        translationPath = 'testimonials.sorting.',
        translate = (key) => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <span>
                    {
                        translate(sortingText)
                    }
                </span>
            </div>
            <div className={styles.bar}>
                <p
                    className={`${styles.byDate} ${sortType ==="created_at" ? styles.active : null}`}
                    onClick={sortByDate}>
                    {
                        translate(dateSortingText)
                    }
                </p>
                <p
                    onClick={sortByRate}
                    className={sortType !=="created_at"  ? styles.active : null}
                >
                    {
                        translate(rateSorting)
                    }
                </p>
            </div>
        </div>
    )
}
