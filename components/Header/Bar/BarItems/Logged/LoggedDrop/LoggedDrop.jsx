// hooks and helpers
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef } from 'react';
// translation 
import useTranslation from 'next-translate/useTranslation'
// componetns
import Link from 'next/link'
// styles 
import styles from './LoggedDrop.module.scss'
// icons
import telIcon from '/public/images/common/phone.png'

export function LoggedDrop({ onClose, user }) {

    useEffect(() => {
        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
        }
    }, [])

    const
        node = useRef(),
        router = useRouter(),

        handleClose = (e) => {
            if (node.current.contains(e.target)) {
                if (e.target.parentNode) return
            }
            onClose()
        },
        { t } = useTranslation('common'),
        translationPath = 'commons.',
        translate = (key) => t(`${translationPath}${key}`)


    return (
        <div
            className={styles.container}
            ref={node}
        >
            <div className={styles.content}>
                <div className={styles.user_photo_name}>
                    <span>
                        <Link href='/personal'>
                            <img src={user.photo} alt="" />
                        </Link>
                    </span>
                    <span>{user.fullName}</span>
                </div>
                <div className={styles.user_tel}>
                    <span>
                        <img src={telIcon.src} alt="" />
                    </span>
                    <span>{user.telephone}</span>
                </div>
                <div className={styles.logOut}>
                    <span>{translate('logOut')}</span>
                </div>
            </div>
        </div>
    )

}
