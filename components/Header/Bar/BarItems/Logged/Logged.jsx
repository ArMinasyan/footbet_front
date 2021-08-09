// styles
import { useState } from 'react';
import styles from './Logged.module.scss'
import { LoggedDrop } from './LoggedDrop/LoggedDrop';
import { LoggedWallper } from './LoggedWallper/LoggedWallper'

export function Logged({
    data
}) {
    const
        // states
        //change user dropdown
        [showUserDrop, setShowUserDrop] = useState(false)

    return (
        <div
            className={styles.container}
            style={showUserDrop ? { padding: '17.5px 0' } : null}>
            <div className={styles.content}>
                {!showUserDrop ?
                    <LoggedWallper
                        img={data.photo}
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
