// componetns
import { Button } from '../../../common/Button/Button'
// styles
import styles from './Bar.module.scss'

export function Bar({
    expClick,
    ordClick,
    expActive,
    ordActive,
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Button
                    page='prediction'
                    textPathName="header.barButtons.express"
                    aditionalStyles={styles.button}
                    click={expClick}
                    active={expActive && expActive}
                />
                <Button
                    page='prediction'
                    textPathName="header.barButtons.ordinar"
                    aditionalStyles={styles.button}
                    click={ordClick}
                    active={ordActive && ordActive}
                />
            </div>
        </div>
    )
}
