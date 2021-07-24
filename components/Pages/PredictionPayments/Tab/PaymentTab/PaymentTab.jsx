import { useRouter } from "next/dist/client/router"
import { extra_data } from "/src/games_data/extra_data";

export function PaymentTab() {

    const
        router = useRouter(),
        game_path_in_extradata = router.query.game.slice(0, router.query.game.indexOf('Game')),
        // can be: express, invinsibleStgy, ordinar, matches, predictionspage
        get_game_data = (query) => {
            switch (query) {
                case "express":
                    return extra_data.express
                case "invinsibleStgy":
                    return extra_data.invinsibleStgy
                case "ordinar":
                    return extra_data.ordinar
                case "matches":
                    return extra_data.matches
                case "predictionspage":
                    return extra_data.predictionspage
            }
        },
        game_data = get_game_data(game_path_in_extradata)

    console.log(game_data);
    return (
        <div>
            {JSON.stringify(game_data)}
        </div>
    )
}
