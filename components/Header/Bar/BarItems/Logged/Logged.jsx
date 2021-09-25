// styles
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../../redux/features/userSlice';
import styles from './Logged.module.scss'
import { LoggedDrop } from './LoggedDrop/LoggedDrop';
import { LoggedWallper } from './LoggedWallper/LoggedWallper'

export function Logged( ) {
    const
        // states
        //change user dropdown
        [showUserDrop, setShowUserDrop] = useState(false)

    const data = useSelector(selectUser);
    const [photo,setPhoto] = useState(data?.photo);
    useEffect (()=>{
        setPhoto(data?.photo)
    }, [data]);

    if ( !data )
      return <></>
    return (
        <div
            className={styles.container}
            style={showUserDrop ? { padding: '17.5px 0' } : null}>
            <div className={styles.content}>
                {!showUserDrop ?
                    <LoggedWallper
                        img={photo}
                        fullName={data.username}
                        click={() => setShowUserDrop(true)}
                    /> :
                    <LoggedDrop
                        onClose={() => setShowUserDrop(false)}
                        user={data}
                    />
                }
            </div>
        </div>
    )
}
