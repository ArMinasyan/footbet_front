// styles
import styles from './Sorting.module.scss'

export function Sorting({
    sortingText,
    dateSortingText,
    rateSorting,
    sortByData,
    sortByRate
}) {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <span>
                    {
                        sortingText
                    }
                </span>
            </div>
            <div className={styles.bar}>
                <span onClick={sortByData}>
                    {
                        dateSortingText
                    }
                </span>
                <span onClick={sortByRate}>
                    {
                        rateSorting
                    }
                </span>
            </div>
        </div>
    )
}
