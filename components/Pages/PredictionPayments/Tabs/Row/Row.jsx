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
  type,
  date,
  time,
  coefficent,
  price,
  clickBuy,
  openPayments,
}) {
  const // translation consfigs
    { t } = useTranslation("prediction"),
    translationPath = "tabs.header.",
    translate = (key) => t(`${translationPath}${key}`);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.leftItems}>
            <span>{order}.</span>
          </div>
          <div className={styles.teamOne}>
            <div className={styles.leftItems}>
              <span>{teamOneName}</span>
            </div>
            <div className={styles.leftItems}>
              <img src={teamOneIcon} alt="" />
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
              <img src={teamTwoIcon} alt="" />
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
          <div className={styles.type}>
            <span>{type}</span>
          </div>
          <div className={styles.date_time}>
            <div className={styles.date}>
              <span>{date}</span>
            </div>
            <div className={styles.time}>
              <span>{time}</span>
            </div>
          </div>
          <div className={styles.coefficent}>
            <span>{coefficent}</span>
          </div>
          <div className={styles.price}>
            <span>{price}</span>
          </div>
          <div className={styles.buyButton_container}>
            <div
              className={styles.button_content}
              onClick={() => {
                clickBuy();
                openPayments();
              }}
            >
              <span>{t("common:commons.buy")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
