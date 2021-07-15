// translations
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './RowDescription.module.scss'

export function RowDescription({
    date,
    gameState,
    teamOne,
    teamOneIcon,
    score,
    teamTwo,
    teamTwoIcon,
    buyButtonName,
    locationInMainPage
}) {
    console.log(gameState.slice(gameState.lastIndexOf(".") + 1))
    const
        // translation consfigs
        { t } = useTranslation('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`),
        gameStarted = gameState.slice(gameState.lastIndexOf(".") + 1) === 'started'
        console.log(gameStarted);


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.date_gameState_content}>
                    <span  className={gameStarted ? styles.started : null}>
                        {date}
                    </span>
                    <span className={gameStarted ? styles.started : null}>
                        {translate(gameState)}
                    </span>
                </div>
                <div className={styles.teams}>
                    <div className={styles.teamOne}>
                        <p>
                            {translate(teamOne)}
                        </p>
                        <img src={teamOneIcon} alt={teamOne} />
                    </div>
                    <div className={styles.score}>
                        <p>
                            {score}
                        </p>
                    </div>
                    <div className={styles.teamTwo}>
                        <img src={teamTwoIcon} alt={teamTwo} />
                        <p>
                            {translate(teamTwo)}
                        </p>
                    </div>
                </div>
                <div className={styles.buyButton_container}>
                    <div className={styles.button_content}>
                        <p>
                            {translate(buyButtonName)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
