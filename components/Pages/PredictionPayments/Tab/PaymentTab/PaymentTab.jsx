// hooks 
import { useRouter } from "next/dist/client/router"
// db's
import { extra_data } from "/src/games_data/extra_data";
// components
import { GameInfo } from "./GameInfo/GameInfo";
import { PaymentPart } from "./PaymentPart/PaymentPart";
// styles 
import styles from './PaymentTab.module.scss'

export function PaymentTab() {

    const
        router = useRouter(),
        // find which type of game user want buy
        game_path_in_extradata = router.query?.game?.slice(0, router.query.game.indexOf('Game')),
        // find exactly which game user want buy
        game_id = router.query?.game?.slice("?"),
        // find game 
        get_game_data = (gameType, db) => {
            switch (gameType) {
                case "express":
                    return db.express.filter(el => el.id === game_id)
                case "invinsibleStgy":
                    return db.invinsibleStgy.filter(el => el.id === game_id)
                case "ordinar":
                    return db.ordinar.filter(el => el.id === game_id)
                case "todayMatches":
                    return db.todayMatches.filter(el => el.id === game_id)
                case "predictionspage":
                    return db.predictionspage.filter(el => el.id === game_id)
                case "predictionslide":
                    return db.predictionslide.filter(el => el.id === game_id)
                default:
                    return []
            }
        },

        game_data = get_game_data(game_path_in_extradata, extra_data)
        console.log(game_data);

    return (
        <div className={styles.container}>
            {game_path_in_extradata !== undefined &&
                <GameInfo game={game_data[0]} />
            }
            <PaymentPart game={game_data[0]} />
        </div>
    )
}
