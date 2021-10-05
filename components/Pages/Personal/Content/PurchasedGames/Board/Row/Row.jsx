// translation 
import useTranslation from 'next-translate/useTranslation'
// styles 
import styles from './Row.module.scss'

export function Row({
    order,
    teamOneName,
    teamOneIcon,
    teamTwoName,
    teamTwoIcon,
    prediction,
    date,
    score,
    price
}) {


    const
        // translation consfigs
        { t } = useTranslation('personal'),
        translationPath = `board.headers.`,
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.leftItems}>
                        {/* <span className={styles.order}>{order}.</span> */}
                    </div>
                    <div className={styles.teamOne}>
                        <div className={styles.leftItems}>
                            <span>{teamOneName}</span>
                        </div>
                        <div className={styles.leftItems}>
                            <img width="50" height="50" src={teamOneIcon} alt="" />
                        </div>
                    </div>
                    <div className={styles.leftItems}>
                        <span className={styles.vs}>VS.</span>
                    </div>
                    <div className={styles.teamTwo}>
                        <div className={styles.leftItems}>
                            <span>{teamTwoName}</span>
                        </div>
                        <div className={styles.leftItems}>
                            <img width="50" height="50" src={teamTwoIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.prediction}>
                        {
                            prediction ?
                                <div className={styles.prediction_content}>
                                    <span className={styles.prediction_title}>{translate('prediction')}</span>
                                    <span className={styles.prediction_body}>
                                        <span style={{"whiteSpace": "pre-line"}}>{prediction}</span>
                                        {/* <span>{score}</span> */}
                                    </span>
                                </div> :
                                <div className={styles.simulator} />
                        }
                    </div>
                    <div className={styles.date_time}>
                        <span className={styles.tablet_score}></span>
                        <div className={styles.date}>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className={styles.score}>
                        <span>{score}</span>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.price_title}>{translate('price')}</span>
                        <span>{price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
