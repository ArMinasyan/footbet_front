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
    type,
    date,
    time,
    coefficent,
    price
}) {

    const
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = `commons.`,
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.leftItems}>
                        <span>{order}.</span>
                    </div>
                    <div className={styles.leftItems}>
                        <span>{teamOneName}</span>
                    </div>
                    <div className={styles.leftItems}>
                        <img src={teamOneIcon} alt="" />
                    </div>
                    <div className={styles.leftItems}>
                        <span>VS.</span>
                    </div>
                    <div className={styles.leftItems}>
                        <span>{teamTwoName}</span>
                    </div>
                    <div className={styles.leftItems}>
                        <img src={teamTwoIcon} alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.prediction}>
                        {
                            prediction.thereIs &&
                            <div className={styles.prediction_content}>
                                <span>{prediction.totalBet}</span>
                                <span>{prediction.coefficent}</span>
                            </div>
                        }
                    </div>
                    <div className={styles.type}>
                        <span>{type}</span>
                    </div>
                    <div className={styles.date}>
                        <span>{date}</span>
                    </div>
                    <div>
                        <span>{time}</span>
                    </div>
                    <div className={styles.coefficent}>
                        <span>{coefficent}</span>
                    </div>
                    <div className={styles.price}>
                        <span>{price}</span>
                    </div>
                    <div className={styles.buyButton_container}>
                        <div className={styles.button_content}>
                            <span>
                                {translate('buy')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
