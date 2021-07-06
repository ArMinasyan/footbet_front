// styles
import styles from './Bar.module.scss'
//components
import { BarItems } from './BarItems/BarItems'
import { Logo } from './Logo/Logo'

export function Bar() {
    return (
        <div className={styles.bar_container}>
            <Logo />
            <BarItems />
        </div>
    )
}
