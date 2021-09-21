// components
import { useEffect } from 'react'
import { Testimonials } from '../common/Testimonials/Testimonials'
import { Matches } from './Matches/Matches'
import { News } from './News/News'
import { Prediction } from './Prediction/Prediction'
import { useSession } from 'next-auth/client'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/features/userSlice'
import axios from "axios";

export default function Main() {
  const [session] = useSession()
  const user = useSelector(selectUser)
  useEffect(() => {
    if (session) {
      console.log('session', session)
      axios.post('http://localhost:1997/api-1/auth/social', session).then(res => {
        console.log(res.data.data)
      })
    }
  }, [user, session])
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
