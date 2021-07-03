import axios from "axios";

export function request(destiantion, data = null) {
  return new Promise((rslv, rjct) => {
    try {
      axios({
        URL: destiantion.url,
        method: destiantion.method,
        data: data || {},
      })
        .then((response) => {
          rslv(response.data);
        })
        .catch((err) => {
          rjct(err);
        });
    } catch (err) {
      rjct(err);
    }
  });
}