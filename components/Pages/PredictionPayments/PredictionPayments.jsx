// hooks
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
// styles
import styles from './PredictionPayments.module.scss'
// components
import { Header } from './Header/Header'
import { Tabs } from './Tab/Tabs'


export default function PredictionPayments() {

    const
        router = useRouter(),
        // review queries for understanding user want buy game (if ye, which game ) or not
        openGamePaymentsPage = Object.keys(router.query).length === 0 ? false : true,
        // states
        [showPredictionTab, setShowPredictionTabs] = useState(!openGamePaymentsPage),
        [showPaymentTab, setShowPaymentTab] = useState(openGamePaymentsPage)

    console.log(router.query);

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
                    click={() => {
                        setShowPredictionTabs(false)
                        setShowPaymentTab(true)
                    }}
                />
            </div>
        </div>
    )
}

