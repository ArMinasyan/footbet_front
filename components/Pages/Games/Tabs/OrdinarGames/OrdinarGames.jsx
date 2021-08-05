import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
// styles 
import styles from '../boardsStyle.module.scss'
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { request } from '../../../../../lib/er.lib'
import { GET_MATCHES_BY_TYPE } from '../../../../../lib/request-destinations';


export function OrdinarGames() {

    const router = useRouter()
    const [ ordinar, setOrdinar ] = useState([]);

    useEffect(()=>{
        request( GET_MATCHES_BY_TYPE(2),{}, {auth:true} )
        .then( rsp => {
            setOrdinar( rsp.data.data.map( item => {
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
    }, []);

    return (
        <div>
            <div className={styles.container}>
                <TabHeader />
                <div className={styles.board}>
                    {
                        ordinar.map((el, i) => (
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
        </div>
    )
}
