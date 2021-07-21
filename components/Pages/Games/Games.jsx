// styles
import styles from './Games.module.scss'
// components
import { Header } from './Header/Header'
import { Tabs } from './Tabs/Tabs'

export default function Games() {
    return (
        <div className={styles.container}>
            <Header />
            <Tabs />
        </div>
    )
}
