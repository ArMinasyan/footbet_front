// components
import { PredictionTab } from './PredictionTab/PredictionTab'
// styles
import styles from './Tabs.module.scss'

export function Tabs({
    expTab,
    ordTab
}) {
    return (
        <div className={styles.container}>
            {expTab && <PredictionTab />}
            {ordTab && <OrdinarGames />}
        </div>
    )
}
