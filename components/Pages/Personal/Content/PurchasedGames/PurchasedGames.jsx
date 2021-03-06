import { useState } from "react";
import { PGSButton } from "./PGSButton/PGSButton";
import { PGBoard } from "./Board/PGBoard/PGBoard";

export function PurchasedGames() {

    const
        // states
        [showboardState, setShowBoardState] = useState(false)

    return (
        // container for grid right working
        <div>
            <PGSButton
                active={showboardState}
                click={() => setShowBoardState(!showboardState)}
            />
            <PGBoard
                show={showboardState}
            />
        </div>
    )
}
