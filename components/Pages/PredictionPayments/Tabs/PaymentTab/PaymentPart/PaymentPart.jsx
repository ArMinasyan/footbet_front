// styles
import styles from './PaymentPart.module.scss'
// components
import { Details } from "./Details/Details";
import { Payment } from "./Payment/Payment";

export function PaymentPart({ game }) {
    return (
        <div className={styles.container}>
            {game !== undefined &&
                <Details game={game} />
            }
            <Payment />
        </div>
    )
}
