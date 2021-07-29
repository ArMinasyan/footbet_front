import styles from './Payment.module.scss'
import { CardForm } from "./CardForm/CardForm";
// icons
import cardForm from '/public/images/payments/card.png'

export function Payment() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <img src={cardForm.src} alt="card icon" />
                </div>
                <div className={styles.form}>
                    <CardForm />
                </div>
            </div>
        </div>
    )
}
