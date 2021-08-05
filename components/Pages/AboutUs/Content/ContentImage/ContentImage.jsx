// styles
import styles from './ContentImage.module.scss'
// icons 
import logo from '/public/images/header/logo.svg'

export function ContentImage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img src={logo.src} alt="" />
                </div>
            </div>
        </div>
    )
}
