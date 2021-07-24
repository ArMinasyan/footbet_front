import { express } from "./express/express";
import { invinsible_strategy } from "./invinsible_strategy/invinsible_strategy";
import { matches } from "./matches/matches";
import { ordinar } from "./ordinar/ordinar";
import { predictions } from "./predictions/predictions";

export const extra_data = {

    express: express,
    invinsibleStgy: invinsible_strategy,
    ordinar: ordinar,
    todayMatches: matches.todayMatches,
    predictionspage: predictions

}