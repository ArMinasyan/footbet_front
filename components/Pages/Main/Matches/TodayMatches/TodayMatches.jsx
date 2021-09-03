// hooks and helpers
import { useState } from "react";
import { SpecificDayMatchesBoard } from "./TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard";
// components
import { TDMatchesBoard } from "./TMBody/TDMatchesBoard/TDMatchesBoard";
import { TMMatchesBoard } from "./TMBody/TMMatchesBoard/TMMatchesBoard";
import { TMHeader } from "./TMHeader/TMHeader";
// styles
import styles from "./TodayMatches.module.scss";

export function TodayMatches({ getSpecificDateMatches }) {
  const // states
    [showTodayGames, setShowTodayGames] = useState(true),
    [showTomorrowGames, setShowTomorrowGames] = useState(false),
    [showSpecificDayMatches, setShowSpecificDayMatches] = useState(false);

  const [specificMatchDay, setSpecificMatchDay] = useState("");

  return (
    <div className={styles.container}>
      <TMHeader
        // TD => today games board shopw configs
        clickTD={() => {
          setShowTomorrowGames(false);
          setShowSpecificDayMatches(false);
          setShowTodayGames(true);
        }}
        TDBoardState={showTodayGames}
        // TM => tommorow games board shopw configs
        clickTM={() => {
          setShowTodayGames(false);
          setShowSpecificDayMatches(false);
          setShowTomorrowGames(true);
        }}
        TMBoardState={showTomorrowGames}
        getSpecificDateMatches={(value) => {
          setShowTodayGames(false);
          setShowTomorrowGames(false);
          setSpecificMatchDay(value);
          setShowSpecificDayMatches(true);
        }}
      />
      {showSpecificDayMatches && (
        <SpecificDayMatchesBoard day={specificMatchDay} />
      )}
      {showTodayGames && <TDMatchesBoard />}
      {showTomorrowGames && <TMMatchesBoard />}
    </div>
  );
}
