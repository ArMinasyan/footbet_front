import { Modal } from "../../../../common/auth/Modal/Modal"
import styles from '../SocialMediaModal.module.scss'
import Link from 'next/link'

export function Instagram({ onModalClose, data, parent }) {

    const top = parent.current.children.instagram.offsetTop

    return (
        <Modal
            onClose={onModalClose}
            containerStyles={styles.container}
            contentStyles={styles.content}
            otherStyles={{ top: top + 'px' }}
        >
            <Link href={data.url}>
                <a target="_blank">
                    <p>
                        {
                            data.text
                        }
                    </p>
                </a>
            </Link>
        </Modal>
    )
}