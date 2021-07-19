import { consts } from 'react-elastic-carousel'
// icons
import arrowRight from '/public/images/main/news/arrowRight.png'
import arrowLeft from '/public/images/main/news/arrowLeft.png'

export function Arrow({ type, onClick, isEdge }) {
    const
        pointer = type === consts.PREV ?
            <img
                src={arrowLeft.src}
                style={{
                    position: 'absolute',
                    left: '40px',
                    cursor: 'pointer',
                    zIndex: 10
                }}
                alt="arrow-left"
            />
            :
            <img
                src={arrowRight.src}
                style={{
                    position: 'absolute',
                    right: '40px',
                    cursor: 'pointer',
                    zIndex: 10
                }}
                alt="arrow-right"
            />,

        styles = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
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
