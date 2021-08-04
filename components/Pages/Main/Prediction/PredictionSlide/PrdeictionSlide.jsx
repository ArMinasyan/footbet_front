// hooks and helpers
import { useRouter } from 'next/dist/client/router'
import { useState , useEffect} from 'react'
//components
import Carousel from 'react-elastic-carousel'
import { Arrow } from './Arrows/Arrow'
import { Item } from './Item/Item'
// styles
import styles from './PrdeictionSlide.module.scss'
// images, icons
import predictionBackground from '/public/images/main/prediction/predBack.png'
import { slide_data } from '../../../../../src/games_data/predictions/slide'
import { request } from '../../../../../lib/er.lib'
import { GET_PREDICTIONS } from '../../../../../lib/request-destinations'

export function PrdeictionSlide() {

    const [ slide_data, setSlideData ] = useState([]);

    useEffect( ()=> {
        request( GET_PREDICTIONS, {}, { auth: true } )
            .then( rsp => {
                // toast(`Successfully registered`)
                setSlideData( rsp.data.data.map( item => {
                    return {
                        id: item.id,
                        teamOneName: 'Атлетико',
                        teamOneIcon: item[`team1_img_path`],
                        teamTwoName: 'Атлетик',
                        teamTwoIcon: item[`team2_img_path`],
                        prediction: {
                            thereIs: true,
                            totalBet: 'тб 1,5 / ',
                            coefficent: 'коеф 3,5'
                        },
                        type: item.type,
                        date: item.date,
                        time: item.time,
                        coefficent: item.factor,
                        predictionButtonName: '.slide.pred_button',
                        buyButtonName: '.slide.buy_button',
                        predictionText: 'Фулхем тб 1,5 / коэф 3,5',
                        ordinarText: `${item.type} / ${item.price}руб.`,
                        price: item.price + ' руб.'
                    }
                }))
            })
            .catch( error => {})
    }, [] );

    const
        style = {
            backgroundImage: "url(" + predictionBackground.src + ")",
            backgroundSize: "cover"
        },
        time = new Date(),
        router = useRouter(),
        breakpoints = [
            { width: 375, itemPadding: [21, 0, 25, 0] },
            { width: 616, itemPadding: [79, 0, 79, 0] },
            { width: 1920, itemPadding: [115, 0, 43, 0] },
        ]

    time.setSeconds(time.getSeconds() + 10600);

    return (
        <div
            className={styles.container}
            style={style}
        >
            <Carousel
                pagination={false}
                renderArrow={Arrow}
                breakPoints={breakpoints}

            >
                {
                    slide_data.map(el => (
                        <Item
                            teamOneName={el.teamOneName}
                            teamTwoName={el.teamTwoName}
                            teamOneIcon={el.teamOneIcon}
                            teamTwoIcon={el.teamTwoIcon}
                            predictionButtonName={el.predictionButtonName}
                            buyButtonName={el.buyButtonName}
                            locationInMainPage={'prediction'}
                            expiryTimestamp={time}
                            prediction={el.predictionText}
                            ordinar={el.ordinarText}
                            key={Math.random()}
                            clickBuy={() => router.push({
                                pathname: '/prediction',
                                query: { game: el.id }
                            })}
                        />
                    ))
                }
            </Carousel>
        </div>
    )
}
