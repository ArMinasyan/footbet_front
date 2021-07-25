import { content_text } from "./content_text";
// styles 
import styles from './ContentText.module.scss'


export function ContentText() {
    return (
        <div className={styles.conatiner}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p>
                        {content_text.title}
                    </p>
                </div>
                <div className={styles.paragraphs_container}>
                    {
                        content_text.paragraphs.map(el => (
                            <div className={styles.paragraph}>
                                <p className={styles.paragraph_title}>
                                    {el.title}
                                </p>
                                <p className={styles.paragraph_text}>
                                    {el.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
