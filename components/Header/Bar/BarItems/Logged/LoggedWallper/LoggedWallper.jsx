// components
import Link from 'next/link'
// styles
import styles from './LoggedWallper.module.scss'
// icons
import triangle from '/public/images/common/triangle.png'
import userDefaultIcon from '/public/images/common/userDefault.png'


export function LoggedWallper({
    img,
    fullName,
    click
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.user_photo}>
                    <Link href='/personal'>
                        <img
                            src={img ? img : userDefaultIcon.src}
                            alt={`${fullName} icon`} />
                    </Link>
                </div>
                <div
                    className={styles.user_fullName}
                    onClick={click}
                >
                    <span className={styles.fullname}>
                        {fullName}
                    </span>
                    <span style={{
                        color: 'white',
                    }}>
                        <img
                            src={triangle.src}
                            alt="triangle" />
                    </span>
                </div>
            </div>
        </div>
    )
}
