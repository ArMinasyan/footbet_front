import { Row } from '../Row/Row'
import { BoardHeader } from '../BoardHeader/BoardHeader';
// import { PG_board } from './PG_board';
// styles 
import styles from './PGBoard.module.scss'
import { useEffect, useState } from 'react';
import { request } from '../../../../../../../lib/er.lib';
import { GET_PAYMENT_HISTORY } from '../../../../../../../lib/request-destinations';

export function PGBoard({ show }) {
  const [ PG_board, setMatches ] = useState([]);
  useEffect(()=>{
    getMatches();
  }, []);

  async function getMatches() {
    try {
      const rsp = await request(GET_PAYMENT_HISTORY,{}, {auth: true});
      setMatches( rsp?.data?.data || [] );
    }
    catch( err ) { }  
  }

    return (
        <>
            {show &&
                <div className={styles.container}>
                    <BoardHeader />
                    <div className={styles.board}>
                        {PG_board.map((el, i) => (
                            <Row
                                order={i + 1}
                                teamOneName={""}
                                teamOneIcon={el.team1_img_path}
                                teamTwoName={""}
                                teamTwoIcon={el.team2_img_path}
                                prediction={el.prediction}
                                date={el.date}
                                score={el.factor}
                                price={el.price}
                                key={el.id}
                            />
                        ))
                        }
                    </div>
                </div>
            }
        </>
    )
}
