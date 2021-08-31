// hooks
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
// datas
import { predictions } from '/src/games_data/predictions/predictions'
// components
import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
// styles
import styles from './PredictionTab.module.scss'
import { GET_PREDICTIONS } from '/lib/request-destinations'
import { request } from '/lib/er.lib'


export function PredictionTab({ click }) {

    const [ slide_data, setSlideData ] = useState([])
    const router = useRouter()

    useEffect( ()=> {
        request( GET_PREDICTIONS, {}, { auth: true } )
            .then( rsp => {
                // toast(`Successfully registered`)
                setSlideData( rsp.data.data.map( item => {
                    return {
                        id: item.id,
                        teamOneName: '',
                        teamOneIcon: item[`team1_img_path`],
                        teamTwoName: '',
                        teamTwoIcon: item[`team2_img_path`],
                        prediction: 'test',
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

    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    slide_data.map((el, i) => (
                        <Row
                            order={i + 1}
                            teamOneName={el.teamOneName}
                            teamOneIcon={el.teamOneIcon}
                            teamTwoName={el.teamTwoName}
                            teamTwoIcon={el.teamTwoIcon}
                            date={el.date}
                            time={el.time}
                            prediction={el.prediction}
                            type={el.type}
                            coefficent={el.coefficent}
                            price={el.price}
                            key={Math.random()}
                            clickBuy={() =>
                                router.push({
                                    pathname: '/prediction',
                                    query: { game: el.id }
                                })
                            }
                            openPayments={click}
                        />
                    ))
                }
            </div>
        </div>
    )
}
