
import styles from './LikeDislikeDrop.module.scss'
// icons 
import likeIcon from '/public/images/main/feedbacks/like.png'
import disLikeIcon from '/public/images/main/feedbacks/dislike.png'
import avatar from '/public/images/main/feedbacks/avatar.png'


export function LikeDislikeDrop({ data = [] }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {
                    data.map(el => (
                        <div className={styles.row}>
                            <img src={avatar.src} alt="avatar" className={styles.avatar} />
                            <div className={styles.user_part}>
                                <p>{el.username}</p>
                                <img src={el.reaction ? likeIcon.src : disLikeIcon.src} alt="reaction" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
