import { user_data } from '/src/user/user'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
// styles 
import styles from './UserInfo.module.scss'
// icons 
import user from '/public/images/personal/user-input.svg'
import unknown from '/public/images/personal/unknown.svg'
import calendar from '/public/images/personal/calendar.svg'
import email from '/public/images/personal/mail.svg'
import phone from '/public/images/personal/phone.svg'
import key from '/public/images/personal/key.svg'
import change from '/public/images/personal/change.png'
import camera from '/public/images/personal/camera.svg'


export function UserInfo() {

    const
        // states
        [changeName, setChangeName] = useState(false),
        [changeDate, setChangeDate] = useState(false),
        [changePhone, setChangePhone] = useState(false),
        [changeEmail, setChangeEmail] = useState(false),
        [userPhoto, setUserPhoto] = useState(user_data.photo),
        { t } = useTranslation('personal')

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.user_photo_content}>
                    <label htmlFor='user_photo'>
                        <div>
                            <img src={userPhoto ? userPhoto : unknown.src} className={styles.user_photo} alt='icon' />
                        </div>
                        <img src={camera.src} alt="icon" className={styles.cameraIcon} />
                    </label>
                    <input
                        type='file'
                        id='user_photo'
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            e.target.files.length !== 0 && setUserPhoto(URL.createObjectURL(e.target.files[0]))
                        }}
                    />
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
                                onChange={(e) => user_data.telephone = e.target.value}
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
                    <div className={styles.changePassword}>
                        <span>
                            <img src={key.src} alt='' />
                        </span>
                        <div>
                            <input
                                placeholder={t('board.headers.changePassword')}
                                type='password'
                                // onChange={(e) => user_data.email = e.target.value}
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
