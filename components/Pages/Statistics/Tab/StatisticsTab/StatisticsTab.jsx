import { Row } from '../Row/Row'
import { TabHeader } from '../TabHeader/TabHeader';
import { statistics_tab } from './statistics_tab';
// styles 
import styles from './StatisticsTab.module.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import { request } from '../../../../../lib/er.lib';
import { GET_STATISTICS } from '../../../../../lib/request-destinations';

export function StatisticsTab() {
  const [ statistics, setStatistics ] = useState([]);
  
  useEffect(()=> {
    getHeapStatistics();
  }, []);

  async function getHeapStatistics () {
    try {
      const statisticsRsp = await request( GET_STATISTICS, {}, { auth: true } );
      setStatistics( ( statisticsRsp?.data?.data || [] ).map( row => {
        return {
          teamOneName: ``,
          teamOneIcon: row.team1_img_path,
          teamTwoName: ``,
          teamTwoIcon: row.team2_img_path,
          date: row.date,
          time: row.time,
          prediction: row.prediction,
          score: row.score,
          gameResult: row.total
        }
      }));
    }
    catch ( err ) { }
  }

    return (
        <div className={styles.container}>
            <TabHeader />
            <div className={styles.board}>
                {
                    statistics.map((el, i) => (
                        <Row
                            order={i + 1}
                            teamOneName={el.teamOneName}
                            teamOneIcon={el.teamOneIcon}
                            teamTwoName={el.teamTwoName}
                            teamTwoIcon={el.teamTwoIcon}
                            date={el.date}
                            time={el.time}
                            prediction={el.prediction}
                            score={el.score}
                            gameResult={el.gameResult}
                            key={Math.random()}
                        />
                    ))
                }
            </div>
        </div>
    )
}
