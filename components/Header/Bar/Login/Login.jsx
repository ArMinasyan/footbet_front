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
        [showResetPasswordModal, setShowResetPasswordModal] = useState(false)

    console.log(showResetPasswordModal);
    return (
        <>
            {showLoginModal &&
                <Modal onClose={onModalClose} contentStyles={styles.m_content} containerStyles={styles.m_container}>
                    <div className={styles.login_container}>
                        <SocialMediaIcons />
                        <LoginForm
                            onModalClose={onModalClose}
                            handleResetPassModal={() => {
                                setShowResetPasswordModal(true)
                                setShowLoginModal(false)
                            }}
                        />
                    </div>
                </Modal>
            }
            {showResetPasswordModal && <ForgotPassword onModalClose={onModalClose} />}
        </>
    )
}
