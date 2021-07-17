import { ItemModal } from '../ItemModal/ItemModal'
import styles from './Item.module.scss'


export function Item({
    img_src,
    description,
    click,
    showModal,
    onModalClose }) {

    const style = {
        backgroundImage: "url(" + img_src + ")",
        backgroundSize: "cover"
    }

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
                    onClick={click}
                >
                    <p>
                        {
                            description
                        }
                    </p>
                </div>
                <div className={styles.bottomLines}>
                    <div className={styles.lineOne} />
                    <div className={styles.lineTwo} />
                </div>

            </div>
            {showModal && <ItemModal onModalClose={onModalClose} />}
        </>
    )
}
