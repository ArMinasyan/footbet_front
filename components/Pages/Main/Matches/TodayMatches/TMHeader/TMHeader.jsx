// components
import { useState } from "react";
import { Title } from "../../../common/Title/Title";
import { DayChangeButton } from '../DayChangeButton/DayChangeButton';
// styles
import styles from './TMHeader.module.scss'

export function TMHeader() {



    const
        // states
        [showYesterdayGames, setShowYesterdayGames] = useState(false),
        [showTodayGames, setShowTodayGames] = useState(true),
        [showTomorrowGames, setShowTomorrowGames] = useState(false),
        // functions
        get_date = () => {
            let
                date = new Date(),
                day = date.getDate(),
                month = date.getMonth() + 1,
                year = date.getFullYear()

            return `${day}.${month < 10 ? "0" + month : month}.${year}`
        }

    return (
        <div className={styles.container}>
            <Title
                locationInMainPage={'matches'}
                textPathName={'.TM.headerTitle'}
                textStyles={{
                    fontSize: '29px',
                    lineHeight: '33px',
                    letterSpacing: '0.18em'
                }}
            />
            <div className={styles.day_change_buttons}>
                <DayChangeButton
                    name='.TM.headerButtons.yesterday'
                    locationInMainPage={'matches'}
                    date={get_date()}
                    active={showYesterdayGames ? 'show': null}
                    click={() => {
                        setShowYesterdayGames(true)
                        setShowTodayGames(false)
                        setShowTomorrowGames(false)
                    }}
                />
                <DayChangeButton
                    name='.TM.headerButtons.today'
                    locationInMainPage={'matches'}
                    date={get_date()}
                    active={showTodayGames ? 'show': null}
                    click={() => {
                        setShowYesterdayGames(false)
                        setShowTodayGames(true)
                        setShowTomorrowGames(false)
                    }}
                />
                <DayChangeButton
                    name='.TM.headerButtons.tomorrow'
                    locationInMainPage={'matches'}
                    date={get_date()}
                    active={showTomorrowGames ? 'show': null}
                    click={() => {
                        setShowYesterdayGames(false)
                        setShowTodayGames(false)
                        setShowTomorrowGames(true)
                    }}
                />
            </div>
        </div>
    )
}
