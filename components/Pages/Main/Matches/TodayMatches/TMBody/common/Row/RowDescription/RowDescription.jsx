// translations
import useTranslation from "next-translate/useTranslation";
// styles
import styles from "./RowDescription.module.scss";

export function RowDescription({
  clickBuy,
  date,
  gameState,
  teamOne,
  teamOneIcon,
  score,
  teamTwo,
  teamTwoIcon,
  buyButtonName,
  locationInMainPage,
}) {
  const // translation consfigs
    { t } = useTranslation("home"),
    translationPath = `${locationInMainPage}`,
    translate = (key) => t(`${translationPath}${key}`),
    gameStarted = gameState.slice(gameState.lastIndexOf(".") + 1) === "started";

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={`
                        ${styles.date_gameNStarted_content} 
                        ${gameStarted ? styles.date_gameStarted_content : null}
                    `}
        >
          <span>{date}</span>
          <span>&nbsp;{translate(gameState)}</span>
        </div>
        <div className={styles.teams}>
          <div className={styles.teamOne}>
            <p>{teamOne}</p>
            <img src={teamOneIcon} alt={teamOne} />
          </div>
          <div className={styles.score}>
            <p>{score}</p>
          </div>
          <div className={styles.teamTwo}>
            <img src={teamTwoIcon} alt={teamTwo} />
            <p>{teamTwo}</p>
          </div>
        </div>
        <div className={styles.buyButton_container}>
          <div className={styles.button_content} onClick={clickBuy}>
            <p>{translate(buyButtonName)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
