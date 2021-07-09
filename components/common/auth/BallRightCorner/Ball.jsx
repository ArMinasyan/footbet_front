import styles from './Ball.module.scss'
import ball from '/public/images/footer/ball.png'

export function Ball() {
    return (
        <div className={styles.container}>
            <img
                src={ball.src}
                alt=""
            />
        </div>
    )
}
