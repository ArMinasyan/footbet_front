// components
import { TMHeader } from './TMHeader/TMHeader'
// styles
import styles from './TodayMatches.module.scss'

export function TodayMatches() {
    return (
        <div className={styles.container}>
            <TMHeader />
        </div>
    )
}
