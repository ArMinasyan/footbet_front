// styles
import Carousel from 'react-elastic-carousel'
import { Arrow } from './Arrows/Arrow'
import { Item } from './Item/Item'
import styles from './PrdeictionSlide.module.scss'
import { pred_slide_data } from './pred_slide_data'
// images, icons
import predictionBackground from '/public/images/main/prediction/predBack.png'

export function PrdeictionSlide() {

    const
        style = {
            backgroundImage: "url(" + predictionBackground.src + ")",
            backgroundSize: "cover"
        },
        time = new Date()

    time.setSeconds(time.getSeconds() + 10600);

    return (
        <div
            className={styles.container}
            style={style}
        >
            <Carousel
                pagination={false}
                renderArrow={Arrow}
                itemPadding={[115, 0, 43, 0]}
                enableAutoPlay={true}
                autoPlaySpeed={5000}
            >
                {
                    pred_slide_data.map(el => (
                        <Item
                            teamOneName={el.teamOneName}
                            teamTwoName={el.teamTwoName}
                            teamOneIcon={el.teamOneIcon}
                            teamTwoIcon={el.teamTwoIcon}
                            predictionButtonName={el.predictionButtonName}
                            buyButtonName={el.buyButtonName}
                            locationInMainPage={'prediction'}
                            expiryTimestamp={time}
                            key={Math.random()}
                        />
                    ))
                }
            </Carousel>
        </div>
    )
}
