import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
import { useRouter } from 'next/dist/client/router';
// styles 
import styles from '../boardsStyle.module.scss'
import { useEffect, useState } from 'react';
import { request } from '../../../../../lib/er.lib'
import { GET_MATCHES_BY_TYPE } from '../../../../../lib/request-destinations';

export function ExpressGames() {

    const router = useRouter();
    const [ express, setExpess ] = useState([]);

    useEffect(()=>{
        request( GET_MATCHES_BY_TYPE(1),{}, {auth:true} )
        .then( rsp => {
            setExpess( rsp.data.data.map( item => {
                return {
                    id: item.id,
                    teamOneName: '',
                    teamOneIcon: item[`team1_img_path`],
                    teamTwoName: '',
                    teamTwoIcon: item[`team2_img_path`],
                    prediction: {
                        thereIs: true,
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
    }, [])

    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    express.map((el, i) => (
                        <Row
                            order={i + 1}
                            teamOneName={el.teamOneName}
                            teamOneIcon={el.teamOneIcon}
                            teamTwoName={el.teamTwoName}
                            teamTwoIcon={el.teamTwoIcon}
                            date={el.date}
                            time={el.time}
                            prediction={el.prediction}
                            coefficent={el.coefficent}
                            price={el.price}
                            key={Math.random()}
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
