// hooks
import { useRouter } from 'next/dist/client/router'
// styles
import styles from './TDMatchesBoard.module.scss'
// components
import Carousel from "react-elastic-carousel"
import { Row } from "../common/Row/Row"
import { RowTitle } from '../common/Row/RowTitle/RowTitle'
import { Arrow } from './Arrows/Arrow'
import { Pagination } from './Pagination/Pagination'
import { matches } from '/src/games_data/matches/matches'


export function TDMatchesBoard() {

    const
        router = useRouter()

    return (
        <Carousel
            itemsToShow={1}
            itemsToScroll={1}
            renderArrow={Arrow}
            renderPagination={Pagination}
            className={styles.container}
        // verticalMode
        >
            <div style={{ width: '100%' }}>
                {
                    matches.todayMatches.map((el, i) =>
                        i < 4 ? (
                            <Row
                                date={el.date}
                                gameState={el.gameState}
                                teamOne={el.teamOne}
                                teamOneIcon={el.teamOneIcon}
                                score={el.score}
                                teamTwo={el.teamTwo}
                                teamTwoIcon={el.teamTwoIcon}
                                buyButtonName={el.buyButtonName}
                                titleName={el.titleName}
                                key={Math.random()}
                                clickBuy={() => router.push({
                                    pathname: '/prediction',
                                    query: { game: el.teamOne }
                                })}
                            />
                        ) : null
                    )
                }
                <RowTitle rowStyles={{ minHeight: '34px' }} />
            </div>
            <div style={{ width: '100%' }}>
                {
                    matches.todayMatches.map((el, i) =>
                        i >= 4 ? (
                            <Row
                                date={el.date}
                                gameState={el.gameState}
                                teamOne={el.teamOne}
                                teamOneIcon={el.teamOneIcon}
                                score={el.score}
                                teamTwo={el.teamTwo}
                                teamTwoIcon={el.teamTwoIcon}
                                buyButtonName={el.buyButtonName}
                                titleName={el.titleName}
                                key={Math.random()}
                                clickBuy={() => router.push({
                                    pathname: '/prediction',
                                    query: { game: el.teamOne }
                                })}
                            />
                        ) : null
                    )
                }
                <RowTitle rowStyles={{ minHeight: '34px' }} />
            </div>
        </Carousel>
    )
}
