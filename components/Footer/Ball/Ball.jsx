import ballIcon from '/public/images/footer/leftBall.png'
import styles from './Ball.module.scss'

export function Ball() {
    return (
        <div className={styles.container}>
            <img
                src={ballIcon.src}
                className={styles.ball}
                alt="ball-png"
            />
            <div className={styles.text_with_ball}>
                <p className={styles.top}>FOOT</p>
                <p className={styles.bottom}>BET</p>
            </div>
        </div>
    )
}
