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
  const [slide_data, setSlideData] = useState([
    {
      "time": "22:00",
      "date": "03.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/6f575ffc-4945-52be-a0bf-3af4c127b33a-17cd8b04900",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/11ca63c6-39b4-5c43-8f4f-46178f08f1f6-17cd8b0493f",
      "id": 250,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "22:00",
      "date": "03.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/9d342708-8238-5516-a9ef-42c060233e32-17cd8b634f7",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/0912e5a9-91fe-5a11-8966-9d20a83bf92e-17cd8b63527",
      "id": 253,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "19:45",
      "date": "03.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/8bab04b8-646a-5891-964b-aba8db69a4b7-17cd8b8311e",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/0ab3756a-989c-5d9e-8ed3-e812909ec5ae-17cd8b83148",
      "id": 254,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "22:00",
      "date": "03.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/e8781623-b60b-5418-b789-4faa1f68446e-17cd8b9f5c3",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/5ad8177b-73dc-5f62-9e5d-d0ebb0b65c6f-17cd8b9f5f2",
      "id": 255,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.7",
      "prediction": null
    },
    {
      "time": "19:45",
      "date": "04.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/6cd88e54-50ab-5649-9758-fae676c51d0e-17cdb1895d9",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/36740dfb-887c-5a22-a250-c33ba4f58071-17cdb18962b",
      "id": 256,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.7",
      "prediction": null
    },
    {
      "time": "22:00",
      "date": "04.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/fb806f32-f6bc-5369-afeb-469ee5758ea2-17cdb196976",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/990da0d6-7e7b-5ce3-bbaa-af48e0a9bbe9-17cdb1969b2",
      "id": 258,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "22:00",
      "date": "04.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/aee5c8dd-067a-5b45-9ebe-a799ee16f4be-17cdb1a6a50",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/c8c363ed-1ee9-58d4-bf60-d6179c982957-17cdb1a6a8f",
      "id": 259,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "22:00",
      "date": "04.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/d0b231fd-c805-55e1-8e64-33e9d96ccb98-17cdb1b6c88",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/5fc2c33e-0bc9-5b76-9339-fb3c4d0bab94-17cdb1b6cc8",
      "id": 260,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "14:30",
      "date": "06.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/57bd414b-0349-51dc-b0df-7ba46b0b6e47-17cdc4e041d",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/ae65aafc-679a-5e9a-9bb1-4a8b71d9ef20-17cdc4e0456",
      "id": 261,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.9",
      "prediction": null
    },
    {
      "time": "17:00",
      "date": "06.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/fc76c7e5-5c5b-5c76-9e25-de91d1bd414f-17cdc4f9480",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/c8a2f39f-68fc-541e-8791-3da658789a33-17cdc4f94c8",
      "id": 262,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.5",
      "prediction": null
    },
    {
      "time": "19:30",
      "date": "06.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/a7f2d3c1-3593-5d84-9f63-3e8f34ef72c9-17cdc508894",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/d2fc0230-185f-52b2-8598-8ffda8e057c3-17cdc5088c6",
      "id": 263,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "17:15",
      "date": "06.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/d6f6b218-3622-513d-bc86-9a99936a711f-17cdc517f63",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/ead51865-1fbb-55e0-bbbb-1ee6d41b550a-17cdc517fa5",
      "id": 264,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.8",
      "prediction": null
    },
    {
      "time": "22:00",
      "date": "06.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/155c7dab-6945-523e-bfdf-fbaf4955297c-17cdc527e52",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/f2ca3fbf-de7a-5231-aa2a-154455bc8456-17cdc527eae",
      "id": 265,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "19:00",
      "date": "06.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/95e48281-3e12-558c-837b-08287d0cf9ac-17cdc53b0e5",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/adcc76fa-e121-5798-8068-d753e0a679ef-17cdc53b12d",
      "id": 266,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "22:00",
      "date": "06.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/e8396bd6-40c3-5617-9706-52a241c5260d-17cdc54d2dc",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/3037dff1-c103-5098-abb5-906296c4d3bf-17cdc54d312",
      "id": 267,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.5",
      "prediction": null
    },
    {
      "time": "16:00",
      "date": "07.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/a558cb43-7ed3-5b19-b79d-dcf89e578525-17cdc56348f",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/2a8dd494-2fb6-5f7d-abc2-db0313230628-17cdc5634ee",
      "id": 268,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "18:30",
      "date": "07.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/36465d19-d390-5cfc-a2b2-4febfc3caa52-17cdc57623f",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/4ae535e4-d1b9-586d-8c5c-c8e3fd072140-17cdc576269",
      "id": 269,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.5",
      "prediction": null
    },
    {
      "time": "17:15",
      "date": "07.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/0310770d-9ae4-51d0-9911-8148fd6b6e11-17cdc58bef5",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/46926f74-9d44-5193-9907-463f50c05f14-17cdc58bf3f",
      "id": 270,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.9",
      "prediction": null
    },
    {
      "time": "22:00",
      "date": "07.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/e2ccabd6-f729-511d-b0f2-fc7d68c4bc66-17cdc5996cb",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/a1a06464-4bb7-5a07-9cc8-f099dbaaff31-17cdc599727",
      "id": 271,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "13:30",
      "date": "07.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/1a278e46-9908-5719-8a9b-2f7a29b43d6b-17cdc5a62ae",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/a803c319-973b-5cfc-9c99-c43de1519dbb-17cdc5a62e3",
      "id": 272,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.6",
      "prediction": null
    },
    {
      "time": "19:00",
      "date": "07.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/2338cd10-d509-52d6-ab3b-7dabf566515f-17cdc5b2a61",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/d3113f0a-98c0-5fe7-b87d-4af7982ed72e-17cdc5b2a98",
      "id": 273,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.5",
      "prediction": null
    },
    {
      "time": "21:45",
      "date": "07.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/ff1d12c4-a7fb-5a0e-896a-e67383d750a9-17cdc5c3d93",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/f49b7a90-d949-5567-905c-1c32cfe1adb7-17cdc5c3dcb",
      "id": 274,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.5",
      "prediction": null
    },
    {
      "time": "14:00",
      "date": "07.11.2021",
      "team1_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/60a9169b-76ab-5e66-9b91-36ac6f4a92af-17cdc5d3767",
      "team2_img_path": "https://footballapp.fra1.digitaloceanspaces.com/prediction_images/8b910614-a67c-5d4f-808c-94862b054669-17cdc5d37b1",
      "id": 275,
      "price": "149",
      "type": "Ординар",
      "coefficent": "1.7",
      "prediction": null
    }
  ]);
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
