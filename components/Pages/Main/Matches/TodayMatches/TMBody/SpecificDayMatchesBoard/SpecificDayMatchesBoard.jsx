// hooks
import { useRouter } from "next/dist/client/router";
// styles
import styles from "./SpecificDayMatchesBoard.module.scss";
// components
import Carousel from "react-elastic-carousel";
import { Row } from "../common/Row/Row";
import { RowTitle } from "../common/Row/RowTitle/RowTitle";
import { Arrow } from "../TDMatchesBoard/Arrows/Arrow";
import { Pagination } from "../TDMatchesBoard/Pagination/Pagination";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import { useEffect } from "react";
import { request } from "../../../../../../../lib/er.lib";
import { GET_MATCHES_OF_SPECIFIC_DAY } from "../../../../../../../lib/request-destinations";

function createDayWithSpecificFormat(day) {
  let d = new Date(day);
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

  return `${da}.${mo}.${ye}`;
}

export function SpecificDayMatchesBoard({ day }) {
  const [firstPage, setFirstPage] = useState([]),
    [secondPage, setSecondPage] = useState([]),
    router = useRouter(),
    [firstPageItems, upDateFirstPageItems] = useState(firstPage),
    [secondPageItems, upDateSecondPageItems] = useState(secondPage),
    [matches, setMatches] = useState([]);

  useEffect(() => {
    upDateFirstPageItems(matches.filter((el, i) => i < 4));
    upDateSecondPageItems(matches.filter((el, i) => i >= 4));
  }, [matches]);

  useEffect(() => {
    request(
      GET_MATCHES_OF_SPECIFIC_DAY(createDayWithSpecificFormat(day)),
      {},
      { auth: true }
    )
      .then((matches) => {
        const now = Date.now();
        setMatches(
          matches.data.data.map((match) => {
            const matchTime = new Date(
              `${match.date.split(`.`).reverse().join(`.`)} ${match.time}`
            ).getTime();
            const gameState =
              now < matchTime
                ? `dontStarted`
                : Math.abs(now - matchTime) < 9000000
                ? "started"
                : "finished";
            return {
              id: match.id,
              date: match.date,
              time: match.time,
              gameState: `.rowOne.gameState.${gameState}`,
              teamOneName: match.teamOneName,
              teamOneIcon: match.team1_img_path,
              teamTwoName: match.teamTwoName,
              teamTwoIcon: match.team2_img_path,
              score: match.score,
              buyButtonName: ".rowOne.buyButton",
              coefficent: match.coefficent,
              titleName: match.country,
            };
          })
        );
      })
      .catch((err) => {
      });
  }, [day]);

  function handleOnDragEndFirstPage(result) {
    if (!result.destination) return;
    const items = Array.from(firstPageItems),
      [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    upDateFirstPageItems(items);
  }

  function handleOnDragEndSecondPage(result) {
    if (!result.destination) return;
    const items = Array.from(secondPageItems),
      [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    upDateSecondPageItems(items);
  }

  return (
    <Carousel
      itemsToShow={1}
      itemsToScroll={1}
      renderArrow={Arrow}
      renderPagination={Pagination}
      className={styles.container}
      enableSwipe={false}
      // verticalMode
    >
      <div style={{ width: "100%" }}>
        <DragDropContext onDragEnd={handleOnDragEndFirstPage}>
          <Droppable droppableId="matchestodayMatchesFirst">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ width: "100%" }}
              >
                {firstPageItems.map((el, i) => (
                  // <Draggable index={i} key={Math.random()} draggableId={el.id}>
                  //   {(provided) => (
                      <div
                        key={el.id}
                        style={{ width: "100%" }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Row
                          date={el.date}
                          gameState={el.gameState}
                          teamOne={el.teamOneName}
                          teamOneIcon={el.teamOneIcon}
                          score={el.score}
                          teamTwo={el.teamTwoName}
                          teamTwoIcon={el.teamTwoIcon}
                          buyButtonName={el.buyButtonName}
                          titleName={el.titleName}
                          clickBuy={() =>
                            router.push({
                              pathname: "/prediction",
                              query: { game: el.id },
                            })
                          }
                        />
                      </div>
                  //   )}
                  // </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <RowTitle rowStyles={{ minHeight: "34px" }} />
      </div>

      <div style={{ width: "100%" }}>
        <DragDropContext onDragEnd={handleOnDragEndSecondPage}>
          <Droppable droppableId="matchestodayMatchesSecond">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ width: "100%" }}
              >
                {secondPageItems.map((el, i) => (
                  <Draggable index={i} key={Math.random()} draggableId={el.id}>
                    {(provided) => (
                      <div
                        style={{ width: "100%" }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Row
                          date={el.date}
                          gameState={el.gameState}
                          teamOne={el.teamOneName}
                          teamOneIcon={el.teamOneIcon}
                          score={el.score}
                          teamTwo={el.teamTwoName}
                          teamTwoIcon={el.teamTwoIcon}
                          buyButtonName={el.buyButtonName}
                          titleName={el.titleName}
                          key={Math.random()}
                          clickBuy={() =>
                            router.push({
                              pathname: "/prediction",
                              query: { game: el.id },
                            })
                          }
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <RowTitle rowStyles={{ minHeight: "34px" }} />
      </div>
    </Carousel>
  );
}
