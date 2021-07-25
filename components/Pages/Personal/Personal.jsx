// components
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/features/userSlice'
import { Title } from '../common/Title/Title'
import { Content } from './Content/Content'
// styles 
import styles from './Personal.module.scss'



export default function Personal() {

    const user_info = useSelector(selectUser)
    console.log(user_info);

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
