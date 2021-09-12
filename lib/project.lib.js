import { request } from "./er.lib";
import { BUY_PREDICTION } from "./request-destinations";

export async function buy(id) {
  try {
    const rsp = await request(BUY_PREDICTION(id), {}, {auth: true});
    if (rsp.data?.success) {
      const payWindow = window.open(rsp.data.data?.payUrl);
    }
  } catch (err) {
    console.log(err);
  }
}