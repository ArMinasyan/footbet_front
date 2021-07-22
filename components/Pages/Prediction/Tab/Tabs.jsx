// components
import { PaymentTab } from './PaymentTab/PaymentTab'
import { PredictionTab } from './PredictionTab/PredictionTab'


export function Tabs({
    predictionTab,
    paymentTab
}) {
    return (
        <>
            {predictionTab && <PredictionTab />}
            {paymentTab && <PaymentTab />}
        </>
    )
}
