// components
import { RowTitle } from './RowTitle/RowTitle'
import { RowDescription } from './RowDescription/RowDescription'
// styles
import styles from './Row.module.scss'


export function Row({
    date,
    gameState,
    teamOne,
    teamOneIcon,
    score,
    teamTwo,
    teamTwoIcon,
    buyButtonName,
    titleName
}) {
    return (
        <div>
            <RowTitle
                content={titleName}
            />
            <RowDescription
                date={date}
                gameState={gameState}
                teamOne={teamOne}
                teamOneIcon={teamOneIcon}
                score={score}
                teamTwo={teamTwo}
                teamTwoIcon={teamTwoIcon}
                buyButtonName={buyButtonName}
            />
        </div>
    )
}
