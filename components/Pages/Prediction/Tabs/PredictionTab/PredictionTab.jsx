import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
import { prediction_tab } from './prediction_tab';
// styles 
import styles from './PredictionTab.module.scss'

export function PredictionTab() {
    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    prediction_tab.map((el, i) => (
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
