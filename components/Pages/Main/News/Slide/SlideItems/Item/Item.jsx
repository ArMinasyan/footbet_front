import { useState } from 'react'
import { ItemModal } from '../ItemModal/ItemModal'
import styles from './Item.module.scss'


export function Item({
    img_src,
    title,
    description }) {

    const
        style = {
            backgroundImage: "url(" + img_src + ")",
            backgroundSize: "cover"
        },
        [showItemModal, setShowItemModal] = useState(false)

    return (
        <>
            <div className={styles.container} >
                <div className={styles.topLines}>
                    <div className={styles.lineOne} />
                    <div className={styles.lineTwo} />
                </div>
                <div
                    className={styles.content}
                    style={style}
                    onClick={() => setShowItemModal(true)}
                >
                    <p>
                        {
                            title
                        }
                    </p>
                </div>
                <div className={styles.bottomLines}>
                    <div className={styles.lineOne} />
                    <div className={styles.lineTwo} />
                </div>

            </div>
            {showItemModal &&
                <ItemModal
                    onModalClose={() => setShowItemModal(false)}
                    img={img_src}
                    title={title}
                    description={description}
                />}
        </>
    )
}
