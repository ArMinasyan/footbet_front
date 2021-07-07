// styles
import styles from './Logo.module.scss'
// components
import Link from 'next/link'
// images and icons
import logo from '/public/images/header/logo.png'


export function Logo() {

    return (
        <Link href='/'>
            <div className={styles.logo_conatiner}>

                <img
                    src={logo.src}
                    alt="FootBet Logo"
                />

            </div>
        </Link >
    )
}
