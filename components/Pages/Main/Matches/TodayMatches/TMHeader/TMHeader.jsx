// components
import { Title } from "../../../../common/Title/Title";
import { DayChangeButton } from './DayChangeButton/DayChangeButton';
// styles
import styles from './TMHeader.module.scss'

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
        }

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
            </div>
        </div>
    )
}
