// styles
import { useState } from 'react'
import styles from './Prediction.module.scss'
// components
import { Header } from './Header/Header'
import { Tabs } from './Tab/Tabs'

export default function Prediction() {

    const
        // states
        [showPredictionTab, setShowPredictionTabs] = useState(true),
        [showPaymentTab, setShowPaymentTab] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header
                    predClick={() => {
                        setShowPredictionTabs(true)
                        setShowPaymentTab(false)
                    }}
                    predActive={showPredictionTab}
                    paymClick={() => {
                        setShowPredictionTabs(false)
                        setShowPaymentTab(true)
                    }}
                    paymActive={showPaymentTab}
                />
                <Tabs
                    predictionTab={showPredictionTab}
                    paymentTab={showPaymentTab}
                />
            </div>
        </div>
    )
}

