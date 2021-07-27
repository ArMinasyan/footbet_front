import { consts } from 'react-elastic-carousel'
// icons
import arrowRight from '/public/images/main/news/arrowRight.png'
import arrowLeft from '/public/images/main/news/arrowLeft.png'
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

        styles = {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: '35px',
            // padding: '10%'
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
        </div>
    )
}
