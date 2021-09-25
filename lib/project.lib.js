import { request } from "./er.lib";
import { BUY_GAME, BUY_PREDICTION } from "./request-destinations";

export async function buy(id, isGame=false) {
  const content = isGame ? BUY_GAME(id) : BUY_PREDICTION(id)
  try {
    const rsp = await request(content, {}, {auth: true});
    if (rsp.data?.success) {
      const payWindow = window.open(rsp.data.data?.payUrl);
    }
  } catch (err) {
    console.log(err);
  }
}