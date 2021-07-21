// styles
import { useState } from 'react'
import styles from './Prediction.module.scss'
// components
import { Header } from './Header/Header'
import { Tabs } from './Tabs/Tabs'

export default function Prediction() {

    const
        // states
        [showExpressGames, setShowExpressGames] = useState(true),
        [showOrdinarGames, setShowOrdinarGames] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header
                    expClick={() => {
                        setShowExpressGames(true)
                        setShowOrdinarGames(false)
                        setShowBsStGames(false)
                    }}
                    expActive={showExpressGames}
                    ordClick={() => {
                        setShowExpressGames(false)
                        setShowOrdinarGames(true)
                        setShowBsStGames(false)
                    }}
                />
                <Tabs
                    expTab={showExpressGames}
                    ordTab={showOrdinarGames}
                />
            </div>
        </div>
    )
}
