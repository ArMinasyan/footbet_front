import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
import { statistics_tab } from './statistics_tab';
// styles 
import styles from './PGBoard.module.scss'

export function PGBoard() {
    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    statistics_tab.map((el, i) => (
                        <Row
                            order={i + 1}
                            teamOneName={el.teamOneName}
                            teamOneIcon={el.teamOneIcon}
                            teamTwoName={el.teamTwoName}
                            teamTwoIcon={el.teamTwoIcon}
                            date={el.date}
                            time={el.time}
                            prediction={el.prediction}
                            score={el.score}
                            gameResult={el.gameResult}
                            key={Math.random()}
                        />
                    ))
                }
            </div>
        </div>
    )
}
