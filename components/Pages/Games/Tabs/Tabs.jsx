// styles
import { BsStGames } from './BsStGames/BsStGames'
import { ExpressGames } from './ExpressGames/ExpressGames'
import { OrdinarGames } from './OrdinarGames/OrdinarGames'
import styles from './Tabs.module.scss'

export function Tabs({
    expTab,
    ordTab,
    bsStTab
}) {
    return (
        <div className={styles.container}>
            {expTab && <ExpressGames />}
            {ordTab && <OrdinarGames />}
            {bsStTab && <BsStGames />}
        </div>
    )
}
