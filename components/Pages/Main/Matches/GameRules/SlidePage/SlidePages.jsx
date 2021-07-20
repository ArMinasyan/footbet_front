import { PageParticles } from "./PagePareticles/PagePareticles";
// styles 
import styles from './SlidePages.module.scss'


export function SlidePages({
    pageData
}) {
    return (
        <div className={styles.container}>
            {
                pageData.map(el => (
                    <PageParticles
                        title={el.title}
                        body={el.body}
                    />
                ))
            }
        </div>
    )
}
