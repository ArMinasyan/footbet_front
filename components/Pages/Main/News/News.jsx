// styles 
import styles from './News.module.scss'
// components 
import { Title } from './Title/Title'
import { Slide } from './Slide/Slide'

export function News() {
    return (
        <div className={styles.container}>
            <Title />
            <Slide />
        </div>
    )
}
