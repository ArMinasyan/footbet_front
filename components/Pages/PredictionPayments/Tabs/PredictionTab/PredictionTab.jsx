// hooks
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
// datas
import { predictions } from "/src/games_data/predictions/predictions";
// components
import { Row } from "../Row/Row";
import { TabHeader } from "../TabHeader/TabHeader";
// styles
import styles from "./PredictionTab.module.scss";
import { GET_PREDICTIONS } from "/lib/request-destinations";
import { request } from "/lib/er.lib";
import { buy } from "../../../../../lib/project.lib";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/features/userSlice";

export function PredictionTab({ click }) {
  const [slide_data, setSlideData] = useState([]);
  const router = useRouter();
  const user = useSelector( selectUser );
  let showPrediction = false;
  // alert(moment().parseZone().zoneName())
  useEffect(() => {
    request(GET_PREDICTIONS(Intl.DateTimeFormat().resolvedOptions().timeZone), {}, { auth: true })
      .then((rsp) => {
        // toast(`Successfully registered`)
        setSlideData(
          rsp.data.data.map((item) => {
            return {
              id: item.id,
              teamOneName: "",
              teamOneIcon: item[`team1_img_path`],
              teamTwoName: "",
              teamTwoIcon: item[`team2_img_path`],
              prediction: item.prediction || ``,
              type: item.type,
              date: item.date,
              time: item.time,
              coefficent: item.factor,
              predictionButtonName: ".slide.pred_button",
              buyButtonName: ".slide.buy_button",
              predictionText: "Фулхем тб 1,5 / коэф 3,5",
              ordinarText: `${item.type} / ${item.price}руб.`,
              price: item.price + " руб.",
            };
          })
        );
      })
      .catch((error) => {});
  }, []);

  return (
    <div className={styles.container}>
      <TabHeader />
      <div className={styles.board}>
        {slide_data.map((el, i) => (
          <Row
            order={i + 1}
            teamOneName={el.teamOneName}
            teamOneIcon={el.teamOneIcon}
            teamTwoName={el.teamTwoName}
            teamTwoIcon={el.teamTwoIcon}
            date={el.date}
            time={el.time}
            prediction={el.prediction}
            type={el.type}
            coefficent={el.coefficent}
            price={el.price}
            key={Math.random()}
            clickBuy={() =>{
                if ( user ) buy(el.id);
                else 
                  router.push(`/registration`);
            }}
            openPayments={click}
          />
        ))}
      </div>
    </div>
  );
}
