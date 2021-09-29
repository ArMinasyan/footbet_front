// hooks
import { useEffect, useState } from "react";
// translations
import useTranslation from "next-translate/useTranslation";
// styles
import styles from "./Item.module.scss";
//components
import { Timer } from "./Timer/Timer";
import { PredictionModal } from "./PredictionModal/PredictionModal";
import { useRouter } from "next/dist/client/router";
import { parseDate } from "../../../../../../lib/er.lib";

export function Item({
  teamOneName,
  teamTwoName,
  teamOneIcon,
  teamTwoIcon,
  predictionButtonName,
  buyButtonName,
  locationInMainPage,
  expiryTimestamp,
  prediction,
  ordinar,
  clickBuy,
}) {
  const router = useRouter();
  const // translation consfigs
    { t } = useTranslation("home"),
    translationPath = `${locationInMainPage}`,
    translate = (key) => t(`${translationPath}${key}`),
    [showPrediction, setShowPrediction] = useState(false),
    [gameStarted, setGameStarted] = useState(false);

  function goToPredictions() {
    // setShowPrediction(!showPrediction);
    router.push(`/prediction`);
  }

  const gameDate = parseDate(expiryTimestamp, `.`);
  gameDate.setHours( gameDate.getUTCHours() + 3 );
  const gameFinished = (new Date()).getTime() > (gameDate.getTime() + (90 * 1000 * 60));


  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.team}>
              <img src={teamOneIcon} alt="" />
              <p>{teamOneName}</p>
            </div>
            <div className={styles.timer_container}>
              <p>{gameFinished ? 
                t(`home:matches.TM.today.rowOne.gameState.finished`) : 
                gameStarted ? 
                  t(`home:matches.TM.today.rowOne.gameState.started`) :  
                  t(`home:gameWillStart`) }</p>
              { (!gameFinished && !gameStarted) && <Timer
                expiryTimestamp={gameDate}
                timeClass={styles.timer}
                gameStarted={gameStarted}
                timeOut={() => setGameStarted(true)}
              />}
            </div>
            <div className={styles.team}>
              <img src={teamTwoIcon} alt="" />
              <p>{teamTwoName}</p>
            </div>
            {showPrediction && (
              <PredictionModal
                teamOneName={teamOneName}
                teamTwoName={teamTwoName}
                teamOneIcon={teamOneIcon}
                teamTwoIcon={teamTwoIcon}
                prediction={prediction}
                ordinar={ordinar}
              />
            )}
          </div>
          <div className={styles.bottom}>
            <div className={styles.buttons}>
              <div className={styles.prediction_button_container}>
                <div
                  className={styles.prediction_button_content}
                  onClick={() => goToPredictions()}
                >
                  <p>{translate(predictionButtonName)}</p>
                </div>
              </div>
              <div className={styles.buy_button_container}>
                <div className={styles.buy_button_content} onClick={clickBuy}>
                  <p>{translate(buyButtonName)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
