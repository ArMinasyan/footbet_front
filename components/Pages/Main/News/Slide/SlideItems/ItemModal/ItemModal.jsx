import { Modal } from '/components/common/auth/Modal/Modal'
import styles from './ItemModal.module.scss'

export function ItemModal({
    onModalClose,
    img,
    title,
    description }) {
    return (
        <Modal
            onClose={onModalClose}
            containerStyles={styles.Mcontainer}
            contentStyles={styles.Mcontent}
            customized
            onClick={onModalClose}
        >
            <div onClick={(e)=>e.stopPropagation()} className={styles.container}>
                <div className={styles.img_content}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.description_content}>
                    <p className={styles.title}>
                        {
                            title
                        }
                    </p>
                    <p className={styles.description}>
                        {
                            description
                        }
                    </p>
                </div>
            </div>
        </Modal>
    )
}
