// styles
import { List } from './List/List'
import styles from './Navigation.module.scss'
// datas
import { nav_data } from './nav_data'

export function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {
                    nav_data.map((el, i) => (
                        <List
                            list_items={el}
                            bordersActive={i === 1 ? true : false}
                            key={Math.random()}
                        />
                    ))
                }
            </div>
        </div>
    )
}
