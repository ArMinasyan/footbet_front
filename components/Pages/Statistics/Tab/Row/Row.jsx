// translation
import useTranslation from "next-translate/useTranslation";
// styles
import styles from "./Row.module.scss";

export function Row({
  order,
  teamOneName,
  teamOneIcon,
  teamTwoName,
  teamTwoIcon,
  prediction,
  date,
  time,
  score,
  gameResult /** it can be: "win", "lose", "return"  */,
}) {
  const getResult = (res) => {
    switch (res) {
      case "Победа":
        return {
          className: styles.win,
          translationText: "win",
        };
      case "Возврат":
        return {
          className: styles.return,
          translationText: "return",
        };
      case "Порожение":
        return {
          className: styles.lose,
          translationText: "lose",
        };
    }
    return {
      className: styles.lose,
      translationText: "lose",
    };
  };

  const // translation consfigs
    { t } = useTranslation("statistics"),
    translationPath = `tab.wallpers.`,
    translate = (key) => t(`${translationPath}${key}`);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.leftItems}>
            <span className={styles.order}>{order}.</span>
          </div>
          <div className={styles.teamOne}>
            <div className={styles.leftItems}>
              <span>{teamOneName}</span>
            </div>
            <div className={styles.leftItems}>
              <img
                style={{ width: "50px", height: "50px" }}
                src={teamOneIcon}
                alt=""
              />
            </div>
          </div>
          <div className={styles.leftItems}>
            <span className={styles.vs}>VS.</span>
          </div>
          <div className={styles.teamTwo}>
            <div className={styles.leftItems}>
              <span>{teamTwoName}</span>
            </div>
            <div className={styles.leftItems}>
              <img
                style={{ width: "50px", height: "50px" }}
                src={teamTwoIcon}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.prediction}>
            {prediction ? (
              <div className={styles.prediction_content}>
                <span className={styles.prediction_title}>
                  {translate("prediction")}
                </span>
                <span className={styles.prediction_body}>
                  <span>{prediction}</span>
                </span>
              </div>
            ) : (
              <div className={styles.simulator} />
            )}
          </div>
          <div className={styles.date_time}>
            <span className={styles.tablet_score}>{score}</span>
            <div className={styles.date}>
              <span>{date}</span>
            </div>
            <div className={styles.time}>
              <span>{time}</span>
            </div>
          </div>
          <div className={styles.score}>
            <span>{score}</span>
          </div>
          <div className={styles.statistic_wallper}>
            <div className={getResult(gameResult).className}>
              <span>{translate(getResult(gameResult).translationText)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
