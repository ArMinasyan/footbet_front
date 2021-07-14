// components
import { Header } from "./Header/Header";
import { GameRules } from "./GameRules/GameRules";
import { TodayMatches } from "./TodayMatches/TodayMatches";
import { useState } from "react";
// styles 
import styles from './Matches.module.scss'

export function Matches() {

    const
        // states
        [showTodayMatches, setShowTodayMatches] = useState(true),
        [showGameRules, setShowGameRules] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header
                    buttonsActivity={showTodayMatches}
                    on_TM_click={() => {
                        setShowTodayMatches(true)
                        setShowGameRules(false)
                    }}
                    on_GM_click={() => {
                        setShowGameRules(true)
                        setShowTodayMatches(false)
                    }}
                />
                {showTodayMatches && <TodayMatches />}
                {showGameRules && <GameRules />}
            </div>
        </div>
    )
}
