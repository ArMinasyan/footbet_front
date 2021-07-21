// components
import { Title } from '../../common/Title/Title'
import { Bar } from './Bar/Bar'
// styles
import styles from './Header.module.scss'

export function Header() {
    return (
        <div className={styles.container}>
            <Title
                page='games'
                textPathName='header.title'
            />
            <Bar />
        </div>
    )
}
