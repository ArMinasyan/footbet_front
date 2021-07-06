import { useEffect, useState, useRef } from 'react'
import close from '/public/images/register/close.svg'
import styles from './Modal.module.scss'
import { createPortal } from 'react-dom'


export function Modal({ onClose, children }) {

    const
        [showModal, setShowModal] = useState(false)


    useEffect(() => {
        setShowModal(true)

        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
        };
    }, [])

    const node = useRef()

    const handleClose = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        onClose()
    }

    const modal = (
        <div className={styles.modalConteiner}>
            <div className={styles.modalContent} ref={node} >
                <div className={styles.mHead}>
                    <div className={styles.closeIcon}>
                        <img
                            onClick={() => handleClose(true)}
                            src={close.src}
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.mBody}>
                    {
                        children
                    }
                </div>
                <div className={styles.footer}>
                </div>
            </div>
        </div>
    )

    if (showModal) return createPortal(
        modal,
        document.getElementById('login-modal-conteiner')
    )
    else return null
}
