//hooks 
import { useState } from 'react'
// components
import { LikeDislikeDrop } from './LikeDislikeDrop/LikeDislikeDrop'
// styles
import styles from './FeedBack.module.scss'
// icons
import likeIcon from '/public/images/main/feedbacks/like.png'
import disLikeIcon from '/public/images/main/feedbacks/dislike.png'
import filledStar from '/public/images/main/feedbacks/filledStar.png'
import unfilledStar from '/public/images/main/feedbacks/unfilledStar.png'


export function FeedBack({
    avatar,
    nikName,
    rateing,
    description,
    date,
    likes,
    disLikes,
    reactionsForTesting
}) {

    const
        stars = [0, 1, 2, 3, 4],
        [showReactions, setShowReactions] = useState(false)



    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.avatar}>
                    <img src={avatar} alt={nikName} />
                    <span>{nikName}</span>
                </div>
                <div className={styles.rateing}>
                    {
                        stars.map((el, i) =>
                            el < rateing ? (
                                <img key={Math.random()} src={filledStar.src} alt="star" />
                            ) : (
                                <img key={Math.random()} src={unfilledStar.src} alt="star" />
                            )
                        )
                    }
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom_content}>
                    <div className={styles.description}>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className={styles.date_likes_container}>
                        <div className={styles.date}>
                            <p>
                                {date}
                            </p>
                        </div>
                        <div className={styles.likes_dislikes}>
                            {/* <div className={styles.like}>
                                <img src={likeIcon.src} alt="like" />
                                <span>{likes}</span>
                            </div>
                            <div
                                className={styles.vertical_border}
                                onClick={() => setShowReactions(!showReactions)}
                            />
                            <div className={styles.disLike}>
                                <img src={disLikeIcon.src} alt="dislike" />
                                <span>{disLikes}</span>
                            </div>
                            {showReactions &&
                                <LikeDislikeDrop data={reactionsForTesting} />
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
