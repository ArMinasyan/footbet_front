// components
import { Modal } from '../../Modal/Modal'
// styles
import styles from './Login.module.scss'

export function Login({onModalClose}) {
    return (
        <Modal onClose={onModalClose}>
            <div className={styles.login_container}>
                dev
            </div>
        </Modal>
    )
}
