import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
import { useRouter } from 'next/dist/client/router';
// styles 
import styles from '../boardsStyle.module.scss'

import { useEffect, useState } from 'react';
import { request } from '../../../../../lib/er.lib'
import { GET_MATCHES_BY_TYPE } from '../../../../../lib/request-destinations';

export function BsStGames() {

    const router = useRouter()
    const [ invinsible_strategy, setInvinsible_strategy ] = useState([]);

    useEffect(()=>{
        request( GET_MATCHES_BY_TYPE(3),{}, {auth:true} )
        .then( rsp => {
            setInvinsible_strategy( rsp.data.data.map( item => {
                return {
                    id: item.id,
                    teamOneName: '',
                    name: item.name,
                    teamOneIcon: item[`team1_img_path`],
                    teamTwoName: '',
                    teamTwoIcon: item[`team2_img_path`],
                    prediction: {
                        thereIs: false,
                        totalBet: 'тб 1,5 / ',
                        coefficent: 'коеф 3,5'
                    },
                    date: item.date,
                    time: item.time,
                    coefficent: item.factor,
                    price: item.price + ' руб.'
                }
            }))
        })
        .catch( error => {})
    }, []);

    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    invinsible_strategy.map((el, i) => (
                        <Row
                            order={i + 1}
                            prediction={el.prediction}
                            coefficent={el.coefficent}
                            price={el.price}
                            text={el.name}
                            key={`key-${i}`}
                            clickBuy={() => router.push({
                                pathname: '/prediction',
                                query: { game: el.id }
                            })}
                        />
                    ))
                }
            </div>
        </div>
    )
}
