// styles
import { useState } from 'react'
import styles from './Games.module.scss'
// components
import { Header } from './Header/Header'
import { Tabs } from './Tabs/Tabs'

export default function Games() {

    const
        // states
        [showExpressGames, setShowExpressGames] = useState(true),
        [showOrdinarGames, setShowOrdinarGames] = useState(false),
        [showBsStGames, setShowBsStGames] = useState(false)

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
                    ordActive={showOrdinarGames}
                    bsStClick={() => {
                        setShowExpressGames(false)
                        setShowOrdinarGames(false)
                        setShowBsStGames(true)
                    }}
                    bsStActive={showBsStGames}
                />
                <Tabs
                    expTab={showExpressGames}
                    ordTab={showOrdinarGames}
                    bsStTab={showBsStGames}
                />
            </div>
        </div>
    )
}
