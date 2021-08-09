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

import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '/redux/features/userSlice'
import userDefaultIcon from '/public/images/common/userDefault.png'
import { request } from '../../../../../lib/er.lib';
import { CHANGE_ACCOUNT_IMAGE, CHANGE_ACCOUNT_INFO } from '../../../../../lib/request-destinations'
import { ToastContainer, toast } from 'react-toastify';
import { login } from '../../../../../redux/features/userSlice'
import { useEffect } from 'react'


export function UserInfo() {

    const user_info = useSelector(selectUser)
    console.log(user_info);
    const dispatch = useDispatch();
   
    useEffect(()=>{
        if ( changeName !== null )
            changeUserData( `username`, user_info.username );
    },[user_info.username]);
   
    useEffect(()=>{
        if ( changeDate !== null )
            changeUserData( `dateOfBirth`, user_info.dateOfBirth );
    },[user_info.dateOfBirth]);
   
    useEffect(()=>{
        if ( changePhone !== null )
            changeUserData( `mobile`, user_info.mobile );
    },[user_info.mobile]);
   
    useEffect(()=>{
        if ( changeEmail !== null )
            changeUserData( `email`, user_info.email );
    },[user_info.email]);

    async function changeUserData(key,value) {
        try {
            (await request( CHANGE_ACCOUNT_INFO, {[key]:value}, {auth: true} ))
            toast( `Successfully updated`);
        }
        catch( err ) {
            toast( error.response.data?.message || `Can't update`, {
                type: `error`
            });
        }
    }

    const
        // states
        // make states null by default, to know if they change for first time
        [changeName, setChangeName] = useState(null),
        [changeDate, setChangeDate] = useState(null),
        [changePhone, setChangePhone] = useState(null),
        [changeEmail, setChangeEmail] = useState(null),
        [userPhoto, setUserPhoto] = useState(user_info.photo ?? userDefaultIcon.src ),
        { t } = useTranslation('personal')
    
    const changeUserPhoto = async (image) => {
        const formData = new FormData();
        formData.append(`profile_img`, image);
        try {
            const imgPath = (await request( CHANGE_ACCOUNT_IMAGE, formData, {auth: true} )).data?.data.img_path ?? "";
            toast( `Image successfully updated`);
            dispatch(login({...user_info, photo:imgPath }));
        }
        catch( err ) {
            toast( error.response.data?.message || `Can't update image`, {
                type: `error`
            });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.user_photo_content}>
                    <label htmlFor='user_photo'>
                        <div>
                            <img width="440" src={userPhoto ? userPhoto : unknown.src} className={styles.user_photo} alt='icon' />
                        </div>
                        <img src={camera.src} alt="icon" className={styles.cameraIcon} />
                    </label>
                    <input
                        type='file'
                        id='user_photo'
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            if ( e.target.files.length !== 0 ) {
                                setUserPhoto(URL.createObjectURL(e.target.files[0]))
                                changeUserPhoto(e.target.files[0])
                            }
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
                            }>{user_info.username}</p>
                            <input
                                placeholder={user_info.username}
                                type='text'
                                style={changeName ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onChange={(e) => user_info.username = e.target.value}
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
                            }>{user_info.dateOfBirth}</p>
                            <input
                                placeholder={user_info.dateOfBirth}
                                type='date'
                                style={changeDate ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onChange={(e) => user_info.dateOfBirth = e.target.value}
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
                            }>{user_info.mobile}</p>
                            <input
                                placeholder={user_info.mobile}
                                type='text'
                                style={changePhone ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onChange={(e) => user_info.mobile = e.target.value}
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
                            }>{user_info.email}</p>
                            <input
                                placeholder={user_info.email}
                                type='text'
                                style={changeEmail ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onChange={(e) => user_info.email = e.target.value}
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
                                // onChange={(e) => user_info.email = e.target.value}
                            />
                        </div>
                        <span>
                            <img
                                src={change.src}
                                alt='icon'
                            />
                        </span>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}
