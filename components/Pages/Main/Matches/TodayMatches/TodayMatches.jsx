// hooks and helpers
import { useState } from 'react'
// components
import { TDMatchesBoard } from './TMBody/TDMatchesBoard/TDMatchesBoard'
import { TMMatchesBoard } from './TMBody/TMMatchesBoard/TMMatchesBoard'
import { YDMatchesBoard } from './TMBody/YDMatchesBoard/YDMatchesBoard'
import { TMHeader } from './TMHeader/TMHeader'
// styles
import styles from './TodayMatches.module.scss'

export function TodayMatches() {

    const
        // states
        [showYesterdayGames, setShowYesterdayGames] = useState(false),
        [showTodayGames, setShowTodayGames] = useState(true),
        [showTomorrowGames, setShowTomorrowGames] = useState(false)

    return (
        <div className={styles.container}>
            <TMHeader
                // YD => yesterday games board shopw configs
                clickYD={() => {
                    setShowYesterdayGames(true)
                    setShowTodayGames(false)
                    setShowTomorrowGames(false)
                }}
                YDBoardState={showYesterdayGames}
                // TD => today games board shopw configs
                clickTD={() => {
                    setShowYesterdayGames(false)
                    setShowTodayGames(true)
                    setShowTomorrowGames(false)
                }}
                TDBoardState={showTodayGames}
                // TM => tommorow games board shopw configs
                clickTM={() => {
                    setShowYesterdayGames(false)
                    setShowTodayGames(false)
                    setShowTomorrowGames(true)
                }}
                TMBoardState={showTomorrowGames}
            />
            {showYesterdayGames && <YDMatchesBoard />}
            {showTodayGames && <TDMatchesBoard />}
            {showTomorrowGames && <TMMatchesBoard />}
        </div>
    )
}
