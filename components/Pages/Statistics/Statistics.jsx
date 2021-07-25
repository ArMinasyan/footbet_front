// styles
import styles from './Statistics.module.scss'
// components
import { Title } from '../common/Title/Title'
import { StatisticsTab } from './Tab/StatisticsTab/StatisticsTab'

export default function Statistics() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Title
                    page='statistics'
                    textPathName='header.title'
                />
                <StatisticsTab />
            </div>
        </div>
    )
}
