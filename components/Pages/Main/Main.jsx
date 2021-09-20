// components
import { useEffect } from 'react'
import { Testimonials } from '../common/Testimonials/Testimonials'
import { Matches } from './Matches/Matches'
import { News } from './News/News'
import { Prediction } from './Prediction/Prediction'
import { useSession } from 'next-auth/client'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/features/userSlice'


export default function Main() {
  const { data: session } = useSession()
  const user = useSelector(selectUser)
  useEffect(()=>{
    console.log( session, user );
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
