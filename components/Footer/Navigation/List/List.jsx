import Link from 'next/link'
import styles from './List.module.scss'

export function List({
    list_items = [],
    bordersActive
}) {
    return (
        <div className={`${styles.container} ${bordersActive && styles.borders}`}>
            <ul>
                {
                    list_items.map(el => (
                        <Link href={el.link}>
                            <li>
                                {
                                    el.name
                                }
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}
