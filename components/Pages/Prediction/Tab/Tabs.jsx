// components
import { PaymentTab } from './PaymentTab/PaymentTab'
import { PredictionTab } from './PredictionTab/PredictionTab'
// styles
import styles from './Tabs.module.scss'

export function Tabs({
    predictionTab,
    paymentTab
}) {
    return (
        <div className={styles.container}>
            {predictionTab && <PredictionTab />}
            {paymentTab && <PaymentTab />}
        </div>
    )
}
