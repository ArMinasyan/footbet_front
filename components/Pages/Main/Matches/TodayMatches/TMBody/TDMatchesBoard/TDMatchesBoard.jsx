import { Row } from "../common/Row/Row"
import { rows_date } from "./rows_data"

export function TDMatchesBoard() {
    return (
        <>
            {
                rows_date.map(el => (
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
                    />
                ))
            }
        </>
    )
}
