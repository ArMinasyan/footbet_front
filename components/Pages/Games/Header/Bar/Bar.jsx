// componetns
import { Button } from '../../../common/Button/Button'
// styles
import styles from './Bar.module.scss'

export function Bar({
    // expClick,
    // ordClick,
    // expActive,
    // ordActive,
    bsStClick,
    bsStActive
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* <Button
                    page='games'
                    textPathName="header.barButtons.express"
                    aditionalStyles={styles.button}
                    click={expClick}
                    active={expActive && expActive}
                />
                <Button
                    page='games'
                    textPathName="header.barButtons.ordinar"
                    aditionalStyles={styles.button}
                    click={ordClick}
                    active={ordActive && ordActive}
                /> */}
                <Button
                    page='games'
                    textPathName="header.barButtons.bestStrategy"
                    aditionalStyles={styles.button}
                    // bsSt => bestStrategy 
                    click={bsStClick}
                    active={bsStActive && bsStActive}
                />
            </div>
        </div>
    )
}
