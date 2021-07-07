import { useEffect, useState, useRef } from 'react'
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
                {
                    children
                }
            </div>
        </div>
    )

    if (showModal) return createPortal(
        modal,
        document.getElementById('modal-conteiner')
    )
    else return null
}
