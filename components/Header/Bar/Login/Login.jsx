// components
import { Modal } from '../../../common/auth/Modal/Modal'
import { SocialMediaIcons } from './SocialMediaIcons/SocialMediaIcons'
import { ForgotPassword } from './ResetPassword/ForgotPassword/ForgotPassword'
import { LoginForm } from './LoginForm/LoginForm'
// styles
import styles from './Login.module.scss'
import { useState } from 'react'



export function Login({ onModalClose }) {

    const
        [showLoginModal, setShowLoginModal] = useState(true),
        [showResetPasswordModal, showShowResetPasswordModal] = useState(false)

    return (
        <>
            {showLoginModal &&
                <Modal onClose={onModalClose}>
                    <div className={styles.login_container}>
                        <SocialMediaIcons />
                        <LoginForm
                            onModalClose={onModalClose}
                            handleResetPassModal={() => {
                                setShowLoginModal(false)
                                showShowResetPasswordModal(true)
                            }}
                        />
                    </div>
                </Modal>
            }
            {showResetPasswordModal && <ForgotPassword onModalClose={onModalClose} />}
        </>
    )
}
