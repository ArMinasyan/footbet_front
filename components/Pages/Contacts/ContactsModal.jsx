import { Modal } from '../../common/auth/Modal/Modal'
// styles 
import styles from './Contacts.module.scss'
import { contacts_data } from './contacts_data'
// icons
import closeVector from '/public/images/header/SocialMedia/closeVector.png'


export default function ContactsModal({ onModalClose, opened = false }) {

    return (
        <Modal
            onClose={onModalClose}
            containerStyles={`${styles.container} `}
            contentStyles={`${styles.content} ${opened ? styles.open : styles.close}`}
        >
            <div className={styles.modal_content}>
                <div className={styles.content_container}>
                    <div className={styles.top}>
                        <img
                            src={closeVector.src}
                            alt=""
                            onClick={() => {
                                onModalClose()
                                document.querySelector('body').style.overflow = 'visible'
                            }}
                        />
                    </div>
                    <div className={styles.rows}>
                        {
                            contacts_data.map(el => (
                                <div className={styles.row} key={Math.random()}>
                                    <div className={styles.img}>
                                        <img src={el.icon} alt="contact-icon" />
                                    </div>
                                    <div className={styles.text}>
                                        <p>{el.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Modal>
    )
}
