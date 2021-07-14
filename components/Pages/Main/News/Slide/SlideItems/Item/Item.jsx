import styles from './Item.module.scss'


export function Item({ img_src, description }) {

    const style = {
        backgroundImage: "url(" + img_src + ")",
        backgroundSize: "cover"
    }

    return (
        <div className={styles.container}>
            <div className={styles.topLines}>
                <div className={styles.lineOne}></div>
                <div className={styles.lineTwo}></div>
            </div>
            <div
                className={styles.content}
                style={style}
            >
                <p>
                    {
                        description
                    }
                </p>
            </div>
            <div className={styles.bottomLines}>
                <div className={styles.lineOne}></div>
                <div className={styles.lineTwo}></div>
            </div>
        </div>
    )
}
