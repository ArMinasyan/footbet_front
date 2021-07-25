// hooks and helpers
import { useState } from 'react'
// components
import { TDMatchesBoard } from './TMBody/TDMatchesBoard/TDMatchesBoard'
import { TMMatchesBoard } from './TMBody/TMMatchesBoard/TMMatchesBoard'
import { TMHeader } from './TMHeader/TMHeader'
// styles
import styles from './TodayMatches.module.scss'

export function TodayMatches() {

    const
        // states
        [showTodayGames, setShowTodayGames] = useState(true),
        [showTomorrowGames, setShowTomorrowGames] = useState(false)

    return (
        <div className={styles.container}>
            <TMHeader
                // TD => today games board shopw configs
                clickTD={() => {
                    setShowTodayGames(true)
                    setShowTomorrowGames(false)
                }}
                TDBoardState={showTodayGames}
                // TM => tommorow games board shopw configs
                clickTM={() => {
                    setShowTodayGames(false)
                    setShowTomorrowGames(true)
                }}
                TMBoardState={showTomorrowGames}
            />
            {showTodayGames && <TDMatchesBoard />}
            {showTomorrowGames && <TMMatchesBoard />}
        </div>
    )
}
