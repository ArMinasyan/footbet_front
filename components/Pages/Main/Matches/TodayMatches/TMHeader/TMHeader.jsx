// hooks
import { useState } from "react";
// components
import { Title } from "../../../../common/Title/Title";
import { DayChangeButton } from './DayChangeButton/DayChangeButton';
import Calendar from 'react-calendar';
// styles
import styles from './TMHeader.module.scss'
// icons
import calendar from '/public/images/main/matches/Calendar.png'
import arrowRight from '/public/images/main/matches/arrowRight.png'
import arrowLeft from '/public/images/main/matches/arrowLeft.png'


export function TMHeader({
    clickTD,
    clickTM,
    TDBoardState,
    TMBoardState }) {

    const
        // functions
        // get_date value changes y_d => yesterday, t_d => today, t_w =>tomorrow
        get_date = (value) => {
            let
                date = new Date(),
                day = null,
                month = date.getMonth() + 1,
                year = date.getFullYear()

            switch (value) {
                case 't_d':
                    day = date.getDate()
                    break;
                case 't_m':
                    day = date.getDate() + 1
                    break;
                default:
                    day = ""
                    break;
            }

            return `${day}.${month < 10 ? "0" + month : month}.${year}`
        },
        // states
        [showCalendar, setShowCalendar] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Title
                    page={'home'}
                    locationInPage={'matches'}
                    textPathName={'.TM.headerTitle'}
                    textStyles={{
                        fontSize: '29px',
                        lineHeight: '33px',
                        letterSpacing: '0.18em'
                    }}
                />
                <div className={styles.day_change_buttons}>
                    <DayChangeButton
                        name='.TM.headerButtons.today'
                        locationInMainPage={'matches'}
                        date={get_date('t_d')}
                        active={TDBoardState ? 'show' : null}
                        click={clickTD}
                    />
                    <DayChangeButton
                        name='.TM.headerButtons.tomorrow'
                        locationInMainPage={'matches'}
                        date={get_date('t_m')}
                        active={TMBoardState ? 'show' : null}
                        click={clickTM}
                    />
                </div>
                <div className={styles.calendar}>
                    <img
                        src={calendar.src}
                        alt="calendar-icon"
                        onClick={() => setShowCalendar(!showCalendar)}
                    />
                </div>
                <div className={styles.calendar_body}>
                    {showCalendar &&
                        <Calendar
                            showNeighboringMonth={false}
                            showWeekNumbers={false}
                            nextLabel={<img src={arrowRight.src} />}
                            prevLabel={<img src={arrowLeft.src} />}
                        />
                    }
                </div>
            </div>
        </div>
    )
}
