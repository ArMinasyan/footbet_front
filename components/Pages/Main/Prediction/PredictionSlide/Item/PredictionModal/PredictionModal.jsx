import styles from './PredictionModal.module.scss'

export function PredictionModal({
    teamOneName,
    teamTwoName,
    teamOneIcon,
    teamTwoIcon,
    prediction,
    ordinar
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.team}>
                        <img src={teamOneIcon} alt={`${teamOneName}-icon`} />
                        <p>
                            {
                                teamOneName
                            }
                        </p>
                    </div>
                    <div className={styles.vs}>
                        <p>
                            VS.
                        </p>
                    </div>
                    <div className={styles.team}>
                        <img src={teamTwoIcon} alt={`${teamTwoIcon}-icon`} />
                        <p>
                            {
                                teamTwoName
                            }
                        </p>
                    </div>
                </div>
                <div className={styles.bottom}> 
                    <p className={styles.prediction}>
                        {
                            prediction
                        }
                    </p>
                    <p className={styles.ordinar}>
                        {
                            ordinar
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}
