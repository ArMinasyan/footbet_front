import { consts } from 'react-elastic-carousel'
// icons
import arrowRight from '/public/images/main/prediction/arrowRight.png'
import arrowLeft from '/public/images/main/prediction/arrowLeft.png'
import arrowLeftVector from '/public/images/main/prediction/arrowLeftVector.png'
import arrowRightVector from '/public/images/main/prediction/arrowRightVector.png'
import arrowStyles from './Arrow.module.scss'

export function Arrow({ type, onClick, isEdge }) {
    const
        pointer = type === consts.PREV ?
            <img
                src={arrowLeft.src}
                className={arrowStyles.arrowLeft}
                alt="arrow-left"
            />
            :
            <img
                src={arrowRight.src}
                className={arrowStyles.arrowRight}
                alt="arrow-right"
            />,
        arrows = type === consts.PREV ?
            <img
                src={arrowRightVector.src}
                className={arrowStyles.arrowRightVector}
                alt="arrow-left"
            />
            :
            <img
                src={arrowLeftVector.src}
                className={arrowStyles.arrowLeftVector}
                alt="arrow-right"
            />,

        styles = {
            position: 'relative',
            height: '100%',
            bottom: 0
        }

    return (
        <div
            onClick={onClick}
            disabled={isEdge}
            style={styles}
        >
            {
                pointer
            }
            {
                arrows
            }
        </div>
    )
}
