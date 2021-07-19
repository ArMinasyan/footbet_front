import ballIcon from '/public/images/footer/staticFooterBall.png'

export function Ball() {
    return (
        <div style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            overflow: 'hidden'
        }}>
            <img
                src={ballIcon.src}
                style={{
                    width: '103%',
                    transform: 'matrix(1, 0, 0, 1, 0, 5)',
                    overflow: 'hidden'
                }}
                alt=""
            />
        </div>
    )
}
