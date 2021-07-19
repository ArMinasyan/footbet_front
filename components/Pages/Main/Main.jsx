// components
import { Testimonials } from '../common/Testimonials/Testimonials'
import { Matches } from './Matches/Matches'
import { News } from './News/News'
import { Prediction } from './Prediction/Prediction'


export default function Main() {
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
