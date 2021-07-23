import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
import { useRouter } from 'next/dist/client/router';
// styles 
import styles from '../boardsStyle.module.scss'
import { express } from '/src/games_data/express/express';

export function ExpressGames() {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    express.map((el, i) => (
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
                            clickBuy={() => router.push({
                                pathname: '/prediction',
                                query: { game: el.id }
                            })}
                        />
                    ))
                }
            </div>
        </div>
    )
}
