import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
import { exp_games } from './express_games';
// styles 
import styles from '../boardsStyle.module.scss'

export function ExpressGames() {
    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    exp_games.map((el, i) => (
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
                        />
                    ))
                }
            </div>
        </div>
    )
}
