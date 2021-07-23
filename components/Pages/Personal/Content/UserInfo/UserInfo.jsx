import { user_data } from './user'
// styles 
import styles from './UserInfo.module.scss'
// icons 
import user from '/public/images/personal/user-input.svg'
import unknown from '/public/images/personal/unknown.png'
import calendar from '/public/images/personal/calendar.svg'
import email from '/public/images/personal/mail.svg'
import phone from '/public/images/personal/phone.svg'
import change from '/public/images/personal/change.png'
import { useState } from 'react'

export function UserInfo() {

    const
        // states
        [changeName, setChangeName] = useState(false),
        [changeDate, setChangeDate] = useState(false),
        [changePhone, setChangePhone] = useState(false),
        [changeEmail, setChangeEmail] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.user_photo_content}>
                    <label htmlFor='user_photo'>
                        <div>
                            <img src={user_data.photo ? user_data.photo : unknown.src} className={styles.user_photo} alt='icon' />
                        </div>
                        <img src="" alt="icon" className={styles.cameraIcon} />
                    </label>
                    <input type='file' id='user_photo' style={{ display: 'none' }} />
                </div>
                <div className={styles.inputs_content}>
                    <div className={styles.info_input}>
                        <span>
                            <img src={user.src} alt='icon' />
                        </span>
                        <div>
                            <p style={!changeName ?
                                { display: 'block' } : { display: 'none' }
                            }>{user_data.fullName}</p>
                            <input
                                placeholder={user_data.fullName}
                                type='text'
                                style={changeName ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onChange={(e) => user_data.fullName = e.target.value}
                            />
                        </div>
                        <span>
                            <img
                                src={change.src}
                                alt=''
                                onClick={() => setChangeName(!changeName)}
                            />
                        </span>
                    </div>
                    <div className={styles.info_input}>
                        <span>
                            <img src={calendar.src} alt='' />
                        </span>
                        <div>
                            <p style={!changeDate ?
                                { display: 'block' } : { display: 'none' }
                            }>{user_data.birthDate}</p>
                            <input
                                placeholder={user_data.birthDate}
                                type='date'
                                style={changeDate ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onChange={(e) => user_data.birthDate = e.target.value}
                            />
                        </div>
                        <span>
                            <img
                                src={change.src}
                                alt=''
                                onClick={() => setChangeDate(!changeDate)}
                            />
                        </span>
                    </div>
                    <div className={styles.info_input}>
                        <span>
                            <img src={phone.src} alt='' />
                        </span>
                        <div>
                            <p style={!changePhone ?
                                { display: 'block' } : { display: 'none' }
                            }>{user_data.telephone}</p>
                            <input
                                placeholder={user_data.telephone}
                                type='text'
                                style={changePhone ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onChange={(e) => user_data.photo = e.target.value}
                            />
                        </div>
                        <span>
                            <img
                                src={change.src}
                                alt=''
                                onClick={() => setChangePhone(!changePhone)}
                            />
                        </span>
                    </div>
                    <div className={styles.info_input}>
                        <span>
                            <img src={email.src} alt='' />
                        </span>
                        <div>
                            <p style={!changeEmail ?
                                { display: 'block' } : { display: 'none' }
                            }>{user_data.email}</p>
                            <input
                                placeholder={user_data.email}
                                type='text'
                                style={changeEmail ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onChange={(e) => user_data.email = e.target.value}
                            />
                        </div>
                        <span>
                            <img
                                src={change.src}
                                alt='icon'
                                onClick={() => setChangeEmail(!changeEmail)}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
