import { express } from "./express/express";
import { invinsible_strategy } from "./invinsible_strategy/invinsible_strategy";
import { matches } from "./matches/matches";
import { ordinar } from "./ordinar/ordinar";

export const extra_data = {
    expres: express,
    invinsibleStgy: invinsible_strategy,
    ordinar:ordinar,
    matches:matches,
}