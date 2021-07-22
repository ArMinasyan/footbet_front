// componetns
import { Button } from '../../../common/Button/Button'
// styles
import styles from './Bar.module.scss'

export function Bar({
    predClick,
    paymClick,
    predActive,
    paymActive,
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Button
                    page='prediction'
                    textPathName="header.barButtons.express"
                    aditionalStyles={styles.button}
                    click={predClick}
                    active={predActive && predActive}
                />
                <Button
                    page='prediction'
                    textPathName="header.barButtons.ordinar"
                    aditionalStyles={styles.button}
                    click={paymClick}
                    active={paymActive && paymActive}
                />
            </div>
        </div>
    )
}
