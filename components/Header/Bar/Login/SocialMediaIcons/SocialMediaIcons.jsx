// Icons
import facebook from '/public/images/header/login/facebook.svg'
import gmail from '/public/images/header/login/gmail.svg'
import vk from '/public/images/header/login/vk.svg'
import twitter from '/public/images/header/login/twitter.svg'
// scss
import styles from './SocialMediaIcons.module.scss'
import ReactFacebookLogin from 'react-facebook-login'
import { useRef } from 'react'
import GoogleLogin from 'react-google-login'

const icons = [
    {
        iconUrl: facebook.src,
        link: "https://www.facebook.com/"
    },
    {
        iconUrl: gmail.src,
        link: "https://accounts.google.com/signin"
    },
    {
        iconUrl: vk.src,
        link: "https://vk.com/login"
    },
    {
        iconUrl: twitter.src,
        link: "https://twitter.com/login"
    }]



const responseFacebook = (response) => {
    console.log(response);
}

const responseGoogle = (response) => {
    console.log(response);
}


export function SocialMediaIcons() {

    function onSocialMediaBtnClick(i) {
        if (i === 0) {
            const
                facebookLoginBtn = document.querySelector(`.facebook-login-btn`)
            if (facebookLoginBtn)
                facebookLoginBtn.click();
        }
        else if (i === 1) {
            const
                googleLoginBtn = document.querySelector(`.google-login-btn`)
            if (googleLoginBtn)
                googleLoginBtn.click();
        }
    }

    return (
        <div className={styles.conteiner}>
            <div className={styles.content}>
                {
                    icons.map((el, i) => {
                        return (
                            <div className={styles.iconContent} key={Math.random() * 10}>
                                <a target="_blank">
                                    <div className={styles.iconBody}>
                                        <img
                                            src={el.iconUrl}
                                            alt="" onClick={() => onSocialMediaBtnClick(i)}
                                            className={styles.icon}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        {
                                            (i === 0) && (
                                                <ReactFacebookLogin
                                                    containerStyle={{ display: `none` }}
                                                    cssClass="facebook-login-btn"
                                                    appId="118863770361683"
                                                    fields="name,email,picture"
                                                    callback={responseFacebook} />
                                            ),
                                            (i === 1) && (
                                                <GoogleLogin
                                                    clientId="1089618047943-r91su9qkc0c9npo1tfoff3sp8421bt5g.apps.googleusercontent.com"
                                                    render={renderProps => (
                                                        <button
                                                            onClick={renderProps.onClick}
                                                            disabled={renderProps.disabled}
                                                            style={{ display: 'none' }}
                                                            className="google-login-btn"
                                                        />)}
                                                    cookiePolicy={'single_host_origin'}
                                                    onSuccess={responseGoogle}
                                                    onFailure={responseGoogle}
                                                />
                                            )

                                        }
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

// TODO
// add foot footbet domain in google develpors account