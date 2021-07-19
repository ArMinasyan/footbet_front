// styles
import { useState } from 'react'
import styles from './Sorting.module.scss'

export function Sorting({
    sortingText,
    dateSortingText,
    rateSorting,
    sortByData,
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
                    onClick={sortByData}>
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
