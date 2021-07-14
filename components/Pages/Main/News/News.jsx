// styles 
import styles from './News.module.scss'
// components 
import { Title } from '../common/Title/Title'
import { Slide } from './Slide/Slide'

export function News() {
    return (
        <div className={styles.container}>
            <Title 
                locationInMainPage={'news'}
                textPathName={'.title'}
            />
            <Slide />
        </div>
    )
}
