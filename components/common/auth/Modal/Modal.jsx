import { useEffect, useState, useRef } from 'react'
import styles from './Modal.module.scss'
import { createPortal } from 'react-dom'


export function Modal({
    onClose,
    children,
    containerStyles = null,
    contentStyles = null,
    otherStyles = null,
    portalLocation = 'modal-conteiner' }) {



    const
        [showModal, setShowModal] = useState(false),
        [pageOverflow, setPageOverflow] = useState(false),
        body = document.querySelector('body')

    useEffect(() => {
        setShowModal(true)
        setPageOverflow(true)
        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
        };
    }, [])

    const node = useRef()

    const handleClose = e => {
        if (node?.current?.contains(e.target)) {
            return;
        } else {
            setPageOverflow(false)
            onClose()
        }
    },
        dinamicTop = window.scrollY

    pageOverflow ? body.style.overflow = 'hidden' : body.style.overflow = 'visible'

    const modal = (
        <div
            className={`${styles.modalConteiner} ${containerStyles}`}
            style={{
                top: dinamicTop + 'px'
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
