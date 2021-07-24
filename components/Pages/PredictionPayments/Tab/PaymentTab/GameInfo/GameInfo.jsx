// hooks
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './GameInfo.module.scss'

export function GameInfo({ game }) {

    const
        // translation consfigs
        { t } = useTranslation('prediction'),
        translationPath = 'tabs.payments.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.teams}>
                    <div className={styles.teamOne}>
                        <img src={game.teamOneIcon} alt="" />
                        <p>{game.teamOneName}</p>
                    </div>
                    <span>VS.</span>
                    <div className={styles.teamTwo}>
                        <img src={game.teamTwoIcon} alt="" />
                        <p>{game.teamTwoName}</p>
                    </div>
                </div>
            </div>
            <div className={styles.gameDetailes}>
                <div className={styles.gameDetContent}>
                    <p>{translate('coefficent')}: {game.coefficent}</p>
                    <p>{translate('gameStartingDate')} {game.date} / {game.time}</p>
                </div>
            </div>
        </div>
    )
}
