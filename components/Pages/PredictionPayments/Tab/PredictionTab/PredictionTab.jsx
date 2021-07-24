// hooks
import { useRouter } from 'next/dist/client/router';
// datas
import { predictions } from '/src/games_data/predictions/predictions'
// components
import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
// styles 
import styles from './PredictionTab.module.scss'


export function PredictionTab({ click }) {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    predictions.map((el, i) => (
                        <Row
                            order={i + 1}
                            teamOneName={el.teamOneName}
                            teamOneIcon={el.teamOneIcon}
                            teamTwoName={el.teamTwoName}
                            teamTwoIcon={el.teamTwoIcon}
                            date={el.date}
                            time={el.time}
                            prediction={el.prediction}
                            type={el.type}
                            coefficent={el.coefficent}
                            price={el.price}
                            key={Math.random()}
                            clickBuy={() =>
                                router.push({
                                    pathname: '/prediction',
                                    query: { game: el.id }
                                })
                            }
                            openPayments={click}
                        />
                    ))
                }
            </div>
        </div>
    )
}
