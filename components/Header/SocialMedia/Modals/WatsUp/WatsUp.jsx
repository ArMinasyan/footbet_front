import { Modal } from "../../../../common/auth/Modal/Modal"
import styles from '../SocialMediaModal.module.scss'

export function WatsUp({ onModalClose, text, parentHeight }) {
    const get_top = (px, content = 1920) => {
        return px * 100 / content
    }

    return (
        <Modal
            onClose={onModalClose}
            containerStyles={styles.container}
            contentStyles={styles.content}
            otherStyles={{ top: get_top(319) + 'vw' }}
        >
            <p>
                {
                    text
                }
            </p>
        </Modal>
    )
}