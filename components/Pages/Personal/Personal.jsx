// components
import { Title } from '../common/Title/Title'
import { Content } from './Content/Content'
// styles 
import styles from './Personal.module.scss'



export default function Personal() {


    return (
        <div className={styles.container}>
            <Title
                page='personal'
                textPathName='title'
            />
            <div className={styles.content}>
                <Content />
            </div>
        </div>
    )
}
