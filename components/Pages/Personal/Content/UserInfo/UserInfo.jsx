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
import { login, changeUserData as _changeUserData } from '../../../../../redux/features/userSlice'
import { useEffect } from 'react'


export function UserInfo() {

    const userInfo = useSelector(selectUser)
    const user_info = {...userInfo};
    const dispatch = useDispatch();

    const [ phoneErrMessage, setPhoneErrMessage ] = useState(``);
   

    const
        // states
        // make states null by default, to know if they change for first time
        [changeName, setChangeName] = useState(null),
        [changeDate, setChangeDate] = useState(null),
        [changePhone, setChangePhone] = useState(null),
        [changeEmail, setChangeEmail] = useState(null),
        [username, setUsername] = useState(user_info.username),
        [date, setDate] = useState(user_info.dateOfBirth),
        [mobile, setMobile] = useState(user_info.mobile),
        [vemail, setEmail] = useState(user_info.email),
        [userPhoto, setUserPhoto] = useState(user_info.photo ?? userDefaultIcon.src ),
        { t } = useTranslation('personal')

    useEffect(()=>{
      if ( !changeName && changeName !== null )
          changeUserData( `username`, username );
    },[changeName]);
   
    useEffect(()=>{
        if ( !changeDate && changeDate !== null ) {
          const d = date;
          changeUserData( `dateOfBirth`, d.split(`-`).reverse().join(`.`) );
        }
    },[changeDate]);
   
    useEffect(()=>{
        if ( !changePhone && !phoneErrMessage && changePhone !== null )
            changeUserData( `mobile`, mobile );
    },[changePhone]);
   
    useEffect(()=>{
        if ( !changeEmail && changeEmail !== null )
            changeUserData( `email`, vemail );
    },[changeEmail]);

    async function changeUserData(key,value) {
        try {
            (await request( CHANGE_ACCOUNT_INFO, {[key]:value}, {auth: true} ))
            dispatch(_changeUserData({...user_info, [key]: value}));
            toast( `Successfully updated`);
        }
        catch( err ) {
            toast( err.response?.data?.message || `Can't update`, {
                type: `error`
            });
        }
    }
    
    const changeUserPhoto = async (image) => {
        const formData = new FormData();
        formData.append(`profile_img`, image);
        try {
            const imgPath = (await request( CHANGE_ACCOUNT_IMAGE, formData, {auth: true} )).data?.data.photo ?? "";
            toast( `Image successfully updated`);
            dispatch(login({...user_info, photo:imgPath }));
        }
        catch( err ) {
            toast( err.response.data?.message || `Can't update image`, {
                type: `error`
            });
        }
    }

    function checkValidState( val, type ) {
      if ( type === `phone` ) {
        if ( !(/^\+([0-9])*$/g.test( val )) ) {
          setPhoneErrMessage(`Телефон не валиден`);
        }
        else setPhoneErrMessage(null);
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
                            }>{username}</p>
                            <input
                                placeholder={username}
                                type='text'
                                style={changeName ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                value={username}
                                onInput={(e) => setUsername(e.target.value)}
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
                            }>{date}</p>
                            <input
                                placeholder={user_info.dateOfBirth}
                                type='date'
                                style={changeDate ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                value={date}
                                onChange={(e) => setDate( e.target.value )}
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
                            }>{mobile}</p>
                            <input
                                placeholder={mobile}
                                type='tel'
                                style={changePhone ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onInput={(e) => {
                                  checkValidState(e.target.value, `phone`);
                                  setMobile(e.target.value);
                                }}
                                onChange={(e) => user_info.mobile = e.target.value}
                                value={mobile}
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
                    { phoneErrMessage && <p style={{color: `red`, fontSize: 12}}>{phoneErrMessage}</p>}
                    <div className={styles.info_input}>
                        <span>
                            <img src={email.src} alt='' />
                        </span>
                        <div>
                            <p style={!changeEmail ?
                                { display: 'block' } : { display: 'none' }
                            }>{vemail}</p>
                            <input
                                placeholder={vemail}
                                value={vemail}
                                type='text'
                                style={changeEmail ?
                                    { display: 'block' } : { display: 'none' }
                                }
                                onChange={(e) => user_info.email = e.target.value}
                                onInput={(e) =>setEmail(e.target.value)}
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
