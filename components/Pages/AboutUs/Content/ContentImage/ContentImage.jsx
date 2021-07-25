// styles
import styles from './ContentImage.module.scss'
// icons 
import footballerIcon from '/public/images/aboutUs/footballer.png'

export function ContentImage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={footballerIcon.src} alt="" />
            </div>
        </div>
    )
}
