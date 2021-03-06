import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import * as axios from 'axios';
import { host } from "../../../lib/constants";

var provider = '';

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
    async session(session, user) {
      if (session) {
        return {
          email: user.email,
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ')[1],
          picture: user.picture,
          username: user.sub,
          provider: user.provider
        };
      }
    },
    async redirect(url, baseUrl) {
      return baseUrl
    },
    async jwt(token, token1, account) {
      if (account) {
        token.provider = account.provider;
      }
      return token
    }
  }
})
