import { Row } from '../Row/Row'
import { BoardHeader } from '../BoardHeader/BoardHeader';
import { PG_board } from './PG_board';
// styles 
import styles from './PGBoard.module.scss'

export function PGBoard({ show }) {
    return (
        <>
            {show &&
                <div className={styles.container}>
                    <BoardHeader />
                    <div className={styles.board}>
                        {PG_board.map((el, i) => (
                            <Row
                                order={i + 1}
                                teamOneName={el.teamOneName}
                                teamOneIcon={el.teamOneIcon}
                                teamTwoName={el.teamTwoName}
                                teamTwoIcon={el.teamTwoIcon}
                                prediction={el.prediction}
                                date={el.date}
                                score={el.score}
                                price={el.price}
                                key={Math.random()}
                            />
                        ))
                        }
                    </div>
                </div>
            }
        </>
    )
}
