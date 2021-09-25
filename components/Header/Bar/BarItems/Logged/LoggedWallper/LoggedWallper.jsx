// components
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../../../redux/features/userSlice'
// styles
import styles from './LoggedWallper.module.scss'
// icons
import triangle from '/public/images/common/triangle.png'
import userDefaultIcon from '/public/images/common/userDefault.png'


export function LoggedWallper({
    img,
    fullName,
    click
}) {
    const data = useSelector(selectUser);
    const [ photo, setPhoto ] = useState(data?.photo)
    const [ fullname, setFullname ] = useState(data?.username)
    useEffect(()=>{
        setPhoto( data?.photo )
        setFullname( data?.username )
    },[data])

    
    if ( !data )
      return <></>
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.user_photo}>
                    <Link href='/personal'>
                        <img
                            src={img || userDefaultIcon.src}
                            alt={`${fullname} icon`} />
                    </Link>
                </div>
                <div
                    className={styles.user_fullName}
                    onClick={click}
                >
                    <span className={styles.fullname}>
                        {fullname}
                    </span>
                    <span style={{
                        color: 'white',
                    }}>
                        <img
                            src={triangle.src}
                            alt="triangle" />
                    </span>
                </div>
            </div>
        </div>
    )
}
