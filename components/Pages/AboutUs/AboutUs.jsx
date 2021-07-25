// components
import { Title } from '../common/Title/Title'
import { Content } from './Content/Content'
// styles
import styles from './AboutUs.module.scss'

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <Title
                page='aboutUs'
                textPathName='header.title'
            />
            <Content />
        </div>
    )
}
