import { useEffect, useState, useRef } from 'react'
import styles from './Modal.module.scss'
import { createPortal } from 'react-dom'


const
    handle_overflow_on_open = () => {
        document.body.style.overflowY = 'scroll'
        document.body.style.position = 'fixed'
        document.body.style.width = '100%'
    },
    handle_overflow_on_close = () => {
        document.body.style.overflowY = 'scroll'
        document.body.style.position = 'static'
        document.body.style.width = 'auto'
    }

export function Modal({
    onClose,
    // closeWithVectore = null,
    children,
    containerStyles = null,
    contentStyles = null,
    otherStyles = null,
    portalLocation = 'modal-conteiner' }) {



    const
        [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setShowModal(true)
        document.addEventListener("mousedown", handleClose);

        return () => {
            handle_overflow_on_close();
            document.removeEventListener("mousedown", handleClose);
        };
    }, [handleClose])

    const node = useRef()

    const handleClose = e => {
        if (node?.current?.contains(e.target)) {
            return;
        } else {
            onClose()
        }
    },
        dinamicTop = window.scrollY

    showModal ? handle_overflow_on_open() : handle_overflow_on_close()

    const modal = (
        <div
            className={`${styles.modalConteiner} ${containerStyles}`}
            style={{
                top: '0px',
                position: 'fixed !important'
            }}>
            <div
                className={`${styles.modalContent} ${contentStyles}`}
                style={otherStyles}
                ref={node}
            >
                {
                    children
                }
            </div>
        </div>
    )
    if (showModal) {
        return createPortal(
            modal,
            document.getElementById(portalLocation)
        )
    }
    else return null
}
