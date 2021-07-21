import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
import { ord_games } from './ord_games';
// styles 
import styles from '../boardsStyle.module.scss'


export function OrdinarGames() {
    return (
        <div>
            <div className={styles.container}>
                <TabHeader />
                <div className={styles.board}>
                    {
                        ord_games.map((el, i) => (
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
        </div>
    )
}
