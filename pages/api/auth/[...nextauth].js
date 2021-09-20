import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import * as axios from 'axios';
import { host } from "../../../lib/constants";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: '748491700753-8jfne8qudsjr7okh8tktp78ulevinvvj.apps.googleusercontent.com',
      clientSecret: 'gxKIG8LPbIb1xgljwgebWz7A',
      
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    Providers.Facebook({
      clientId: '384784406723721',
      clientSecret: '5b367bf9c6e69374c29df587116635fd',
    }),
    Providers.VK({
      clientId: '7896005',
      clientSecret: 'Qo3jDgq8AjuE1Dayi3g9',
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {

      let userInfo = {};
      if (account.provider === 'google') {
        userInfo = {
          provider: account.provider,
          email: profile.email,
          firstName: profile.given_name,
          lastName: profile.family_name,
          picture: profile.picture,
          id: profile.id
        }
      }
      if (account.provider === 'facebook') {
        userInfo = {
          provider: account.provider,
          email: profile.email,
          firstName: profile.name.split(' ')[0],
          lastName: profile.name.split(' ')[1],
          picture: profile.picture.data.url,
          id: profile.id
        }
      }

      if (account.provider === 'vk') {
        userInfo = {
          provider: account.provider,
          username: `id${profile.response[0].id}`,
          id: profile.response[0].id,
          firstName: profile.response[0].first_name,
          lastName: profile.response[0].last_name,
          picture: profile.response[0].photo_100
        }
      }

      console.log( userInfo );

      return userInfo
    }
  }
})
