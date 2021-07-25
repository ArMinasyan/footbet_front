// styles
import styles from './Content.module.scss'
// components
import { PurchasedGames } from './PurchasedGames/PurchasedGames'
import { UserInfo } from './UserInfo/UserInfo'

export function Content() {
    return (
        <div className={styles.container}>
            <UserInfo />
            <PurchasedGames />
        </div>
    )
}
