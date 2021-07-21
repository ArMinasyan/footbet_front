import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
import { bsSt_games } from './bsSt_games';
// styles 
import styles from '../boardsStyle.module.scss'

export function BsStGames() {
    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    bsSt_games.map((el, i) => (
                        <Row
                            order={i + 1}
                            teamOneName={el.teamOneName}
                            teamOneIcon={el.teamOneIcon}
                            teamTwoName={el.teamTwoName}
                            teamTwoIcon={el.teamTwoIcon}
                            date={el.date}
                            time={el.time}
                            prediction={el.prediction}
                            coefficent={el.coefficent}
                            price={el.price}
                            key={Math.random()}
                        />
                    ))
                }
            </div>
        </div>
    )
}
