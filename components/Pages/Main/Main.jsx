// components
import { useEffect } from 'react'
import { Testimonials } from '../common/Testimonials/Testimonials'
import { Matches } from './Matches/Matches'
import { News } from './News/News'
import { Prediction } from './Prediction/Prediction'
import { useSession } from 'next-auth/client'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../../../redux/features/userSlice'
import axios from "axios";
import { removeCookie, request, setCookie } from '../../../lib/er.lib'
import { GET_ACCOUNT_INFO } from '../../../lib/request-destinations'

export default function Main() {
  const [session] = useSession()
  const dispatch = useDispatch()
  console.log( `session`, session );
  const user = useSelector(selectUser)
  useEffect(() => {
    if (session) {
      axios.post('https://footbet24.com/api-1auth/social', session).then(async(res) => {
        setCookie( `access-token`, res?.data?.data?.token, 1 );
        try {
          const user = ( await request( GET_ACCOUNT_INFO, {}, {auth: true} ) ).data?.data;
          console.log( user );
          dispatch(login(user));
        }
        catch( err ) {
          console.log( err, 1213 );
          removeCookie( `access-token`)
        }
      })
    }
  }, [session])
    return (
        <>
            <News />
            <Matches
                gameRulesState={true}
            />
            <Prediction />
            <Testimonials
                page={'home'}
                locationInPage={'testimonials'}
                textPathName={'.title'}
            />
        </>
    )
}
