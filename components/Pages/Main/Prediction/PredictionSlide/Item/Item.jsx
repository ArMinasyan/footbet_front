// translations
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './Item.module.scss'
//components
import { Timer } from './Timer/Timer'

export function Item({
    teamOneName,
    teamTwoName,
    teamOneIcon,
    teamTwoIcon,
    predictionButtonName,
    buyButtonName,
    locationInMainPage,
    expiryTimestamp
}) {

    const
        // translation consfigs
        { t } = useTranslation('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`)
    

    return (
        <div className={styles.container} >
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.team1}>
                        <img src={teamOneIcon} alt="" />
                        <p>{translate(teamOneName)}</p>
                    </div>
                    <div>
                        <Timer
                            expiryTimestamp={expiryTimestamp}
                            timeClass={styles.timer}
                        />
                    </div>
                    <div className={styles.team2}>
                        <img src={teamTwoIcon} alt="" />
                        <p>{translate(teamTwoName)}</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.buttons}>
                        <div className={styles.prediction_button_container}>
                            <div className={styles.prediction_button_content}>
                                <p>{translate(predictionButtonName)}</p>
                            </div>
                        </div>
                        <div className={styles.buy_button_container}>
                            <div className={styles.buy_button_content}>
                                <p>{translate(buyButtonName)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
