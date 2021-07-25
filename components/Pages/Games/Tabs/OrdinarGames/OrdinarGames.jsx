import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
// styles 
import styles from '../boardsStyle.module.scss'
import { ordinar } from '/src/games_data/ordinar/ordinar';
import { useRouter } from 'next/dist/client/router';


export function OrdinarGames() {

    const router = useRouter()

    return (
        <div>
            <div className={styles.container}>
                <TabHeader />
                <div className={styles.board}>
                    {
                        ordinar.map((el, i) => (
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
        </div>
    )
}
