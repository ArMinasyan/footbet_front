// styles
import styles from './Logo.module.scss'

// images and icons
import logo from '/public/images/header/logo.png'


export function Logo() {

    return (
        <div className={styles.logo_conatiner}>
            <img
                src={logo.src}
                alt="FootBet Logo"
            />
        </div>
    )
}
