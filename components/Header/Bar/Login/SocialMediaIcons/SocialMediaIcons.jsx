// Icons
import facebook from '/public/images/header/login/facebook.svg'
import gmail from '/public/images/header/login/gmail.svg'
import vk from '/public/images/header/login/vk.svg'
import twitter from '/public/images/header/login/twitter.svg'
// scss
import styles from './SocialMediaIcons.module.scss'
// components
import ReactFacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import TwitterLogin from "react-twitter-login";
import { useEffect } from 'react'

import { LOGIN_WITH_FB } from '/lib/request-destinations.js';
import { request } from '/lib/er.lib';
import { LOGIN_WITH_GOOGLE, LOGIN_WITH_VK } from '../../../../../lib/request-destinations'

const icons = [
  {
    iconUrl: facebook.src,
  },
  {
    iconUrl: gmail.src,
  },
  {
    iconUrl: vk.src,
  }
  // {
  //   iconUrl: twitter.src,
  // },
];



const responseFacebook = (response) => {
}

const responseGoogle = (response) => {
}

const TWITTER_CONSUMER_KEY = "";
const TWITTER_CONSUMER_SECRET = "";

export function SocialMediaIcons() {


    useEffect(()=>{                         
    //  VK.init({apiId:'7911294'});
    },[])
    
    async function onSocialMediaBtnClick(i) {
        if (i === 0) {
          try {
            const rsp = await request( LOGIN_WITH_FB );
          }
          catch ( err ) {

          }
            // const facebookLoginBtn = document.querySelector(`.facebook-login-btn`);
            // if (facebookLoginBtn)
            //     facebookLoginBtn.click();
        }
        else if (i === 1) {
          try {
            const rsp = await request( LOGIN_WITH_GOOGLE );
          }
          catch ( err ) {
            
          }
            // const
            //     googleLoginBtn = document.querySelector(`.google-login-btn`)
            // if (googleLoginBtn)
            //     googleLoginBtn.click();
        }
        else if ( i === 2 ) {   
          try {
            const rsp = await request( LOGIN_WITH_VK );
          }
          catch ( err ) {}
                     
            // VK.Auth.login(function(response){
            //     if(response.session){
            //         /*User authorization succeeded*/
            //         if(response.status=='connected'){
            //             /*Selected user access settings, if they are requested*/
            //         }
            //     } else {
            //         /*User clicks the cancel button in the authorization window*/
            //     }
            // });
        }
        else if ( i === 3 ) {

        }
    }

    const twitterAuthHandler = ( err, data ) => {
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
                                            )
                                        }
                                        {
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
                                        {                                            
                                            <TwitterLogin
                                                authCallback={twitterAuthHandler}
                                                consumerKey={TWITTER_CONSUMER_KEY}
                                                consumerSecret={TWITTER_CONSUMER_SECRET}
                                            />
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