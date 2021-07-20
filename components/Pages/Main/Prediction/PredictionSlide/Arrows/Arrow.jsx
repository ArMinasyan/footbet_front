import { consts } from 'react-elastic-carousel'
// icons
import arrowRight from '/public/images/main/prediction/arrowRight.png'
import arrowLeft from '/public/images/main/prediction/arrowLeft.png'
import arrowLeftVector from '/public/images/main/prediction/arrowLeftVector.png'
import arrowRightVector from '/public/images/main/prediction/arrowRightVector.png'

export function Arrow({ type, onClick, isEdge }) {
    const
        pointer = type === consts.PREV ?
            <img
                src={arrowLeft.src}
                style={{
                    cursor: 'pointer',
                    zIndex: 10,
                    height: '100%'
                }}
                alt="arrow-left"
            />
            :
            <img
                src={arrowRight.src}
                style={{
                    cursor: 'pointer',
                    zIndex: 10,
                    height: '100%'
                }}
                alt="arrow-right"
            />,
        arrows = type === consts.PREV ?
            <img
                src={arrowRightVector.src}
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '35%',
                    top: '50%'

                }}
                alt="arrow-left"
            />
            :
            <img
                src={arrowLeftVector.src}
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '50%',
                    left: '35%'

                }}
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
