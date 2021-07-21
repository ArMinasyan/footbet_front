// components
import { Title } from '../../common/Title/Title'
import { Bar } from './Bar/Bar'
// styles
import styles from './Header.module.scss'

export function Header({
    expClick,
    ordClick,
    bsStClick,
    expActive,
    ordActive,
    bsStActive
}) {
    return (
        <div className={styles.container}>
            <Bar
                expClick={expClick}
                ordClick={ordClick}
                bsStClick={bsStClick}
                expActive={expActive}
                ordActive={ordActive}
                bsStActive={bsStActive}
            />
        </div>
    )
}
