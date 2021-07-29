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
        [showBsStGames, setShowBsStGames] = useState(false),
        // functions
        handleChangingBySelect = (data) => {
            switch (data.id) {
                // can be express, ordinar, bestStrategy
                case 'express':
                    setShowExpressGames(true)
                    setShowOrdinarGames(false)
                    setShowBsStGames(false)
                    break;

                case 'ordinar':
                    setShowExpressGames(false)
                    setShowOrdinarGames(true)
                    setShowBsStGames(false)
                    break;

                case 'bestStrategy':
                    setShowExpressGames(false)
                    setShowOrdinarGames(false)
                    setShowBsStGames(true)
                    break;

                default:
                    setShowExpressGames(true)
                    setShowOrdinarGames(false)
                    setShowBsStGames(false)
                    break;
            }
        }

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
                    changeBySelect={(e) => handleChangingBySelect(e)}
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
