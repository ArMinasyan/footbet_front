// styles
import { useState } from 'react'
import styles from './Sorting.module.scss'

export function Sorting({
    sortingText,
    dateSortingText,
    rateSorting,
    sortByDate,
    sortByRate,
    dateActive
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
                <p
                    className={`${styles.byDate} ${dateActive ? styles.active : null}`}
                    onClick={sortByDate}>
                    {
                        dateSortingText
                    }
                </p>
                <p
                    onClick={sortByRate}
                    className={!dateActive ? styles.active : null}
                >
                    {
                        rateSorting
                    }
                </p>
            </div>
        </div>
    )
}
