// components
import { ContentImage } from "./ContentImage/ContentImage";
import { ContentText } from "./ContentText/ContentText";
// styles 
import styles from './Content.module.scss'

export function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ContentImage />
                <ContentText />
            </div>
        </div>
    )
}
