// styles
import styles from './Logo.module.scss'
// components
import Link from 'next/link'
// images and icons
import logo from '/public/images/header/logo.svg'


export function Logo() {

    return (

        <div className={styles.logo_conatiner}>
            <Link href='/'>
                <img
                    src={logo.src}
                    alt="FootBet Logo"
                />
            </Link >
        </div>

    )
}
