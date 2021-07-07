// components
import { Modal } from '../../../common/auth/Modal/Modal'
import { SocialMediaIcons } from './SocialMediaIcons/SocialMediaIcons'
import { LoginForm } from './LoginForm/LoginForm'
// styles
import styles from './Login.module.scss'


export function Login({ onModalClose }) {
    return (
        <Modal onClose={onModalClose}>
            <div className={styles.login_container}>
                <SocialMediaIcons />
                <LoginForm />
            </div>
        </Modal>
    )
}
