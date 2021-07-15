import styles from './RowDescription.module.scss'

export function RowDescription({
    date,
    gameState,
    teamOne,
    teamOneIcon,
    score,
    teamTwo,
    teamTwoIcon,
    buyButtonName
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.date_gameState_content}>
                    <span>
                        {date}
                    </span>
                    <span>
                        {gameState}
                    </span>
                </div>
                <div className={styles.teams}>
                    <div className={styles.teamOne}>
                        <p>
                            {teamOne}
                        </p>
                        <img src={teamOneIcon} alt={teamOne} />
                    </div>
                    <div className={styles.score}>
                        {score}
                    </div>
                    <div className={styles.teamTwo}>
                        <img src={teamTwoIcon} alt={teamTwo} />
                        <p>
                            {teamTwo}
                        </p>
                    </div>
                </div>
                <div className={styles.buyButton_container}>
                    <div className={styles.button_content}>
                        <p>
                            {buyButtonName}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
