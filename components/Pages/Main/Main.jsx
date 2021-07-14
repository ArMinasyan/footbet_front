// styles 
import styles from './Main.module.scss'
// components
import { News } from './News/News'

export default function Main() {
    return (
        <div className={styles.container}>
            <News />
        </div>
    )
}
