//styles
import styles from './Header.module.scss'
import { Bar } from './Bar/Bar'
import { NavBar } from './NavBar/NavBar'

export function Header() {
    return (
        <div className={styles.header_container}>
            <Bar />
            <NavBar />
        </div>
    )
}
