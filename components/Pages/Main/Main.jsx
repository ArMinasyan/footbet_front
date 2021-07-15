// components
import { Matches } from './Matches/Matches'
import { News } from './News/News'
import { Prediction } from './Prediction/Prediction'
import { Testimonials } from './Testimonials/Testimonials'

export default function Main() {
    return (
        <>
            <News />
            <Matches />
            <Prediction />
            <Testimonials />
        </>
    )
}
