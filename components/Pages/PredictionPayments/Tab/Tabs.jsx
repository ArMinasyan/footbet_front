// components
import { PaymentTab } from './PaymentTab/PaymentTab'
import { PredictionTab } from './PredictionTab/PredictionTab'


export function Tabs({
    predictionTab,
    paymentTab,
    gameIdForPayment,
    click
}) {
    return (
        <>
            {predictionTab && <PredictionTab click={click} />}
            {paymentTab && <PaymentTab gameId={gameIdForPayment} />}
        </>
    )
}
