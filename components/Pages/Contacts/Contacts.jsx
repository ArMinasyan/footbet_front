import { Modal } from '../../common/auth/Modal/Modal'
import styles from './Contacts.module.scss'

export default function Contacts({ onModalClose, opened }) {
    return (
        <Modal
            onClose={onModalClose}
            containerStyles={styles.container}
            contentStyles={opened ? styles.content : styles.close}
        >
            contacts
        </Modal>
    )
}
