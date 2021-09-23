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
import { signIn } from 'next-auth/client'
import Link from 'next/link';
import axios from 'axios'
import { host } from '../../../../../lib/constants'

const icons = [
  {
    iconUrl: facebook.src,
    provider: "facebook"
  },
  {
    iconUrl: gmail.src,
    provider: "google"
  },
  {
    iconUrl: vk.src,
    provider: "vk"
  }
  // {
  //   iconUrl: twitter.src,
  // },
];


export function SocialMediaIcons() {
  async function login(provider) {
    try {
      const userInfo = await signIn(provider, { redirect: false })
      console.log( userInfo, 1234 );
      debugger
      if ( userInfo ) {
        axios.post(`${host}auth/social`, userInfo).then(res => {
          console.log(res.data.data)
        })
      }

    }
    catch( err ) {}
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
                    <Link href={'/api/auth/signin'}>
                      <a onClick={e => {
                        e.preventDefault();
                        console.log(123);
                        login(el.provider)
                      }}>
                        <img
                          src={el.iconUrl}
                          alt=""
                          className={styles.icon}
                          style={{ cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
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
