// hooks
import { useRouter } from 'next/dist/client/router'
import { matches } from '/src/games_data/matches/matches'
// styles
import styles from './TDMatchesBoard.module.scss'
// components
import Carousel from "react-elastic-carousel"
import { Row } from "../common/Row/Row"
import { RowTitle } from '../common/Row/RowTitle/RowTitle'
import { Arrow } from './Arrows/Arrow'
import { Pagination } from './Pagination/Pagination'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'


export function TDMatchesBoard() {

    const
        frstPage = matches.todayMatches.filter((el, i) => i < 4),
        secondPage = matches.todayMatches.filter((el, i) => i >= 4),
        router = useRouter(),
        [firstPageItems, upDateFirstPageItems] = useState(frstPage),
        [secondPageItems, upDateSecondPageItems] = useState(secondPage)

    function handleOnDragEndFirstPage(result) {
        if (!result.destination) return;
        const
            items = Array.from(firstPageItems),
            [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        upDateFirstPageItems(items);
    }

    function handleOnDragEndSecondPage(result) {
        if (!result.destination) return;
        const
            items = Array.from(secondPageItems),
            [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

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
            <div style={{ width: '100%' }}>
                <DragDropContext onDragEnd={handleOnDragEndFirstPage}>
                    <Droppable droppableId="matchestodayMatchesFirst">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} style={{ width: '100%' }}>
                                {firstPageItems.map((el, i) => (
                                    <Draggable
                                        index={i}
                                        key={Math.random()}
                                        draggableId={el.id}
                                    >
                                        {
                                            (provided) => (
                                                <div
                                                    style={{ width: '100%' }}
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
                                                        clickBuy={() => router.push({
                                                            pathname: '/prediction',
                                                            query: { game: el.id }
                                                        })}
                                                    />
                                                </div>
                                            )

                                        }
                                    </Draggable>)
                                )}
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>
                </DragDropContext>
                <RowTitle rowStyles={{ minHeight: '34px' }} />
            </div>

            <div style={{ width: '100%' }}>
                <DragDropContext onDragEnd={handleOnDragEndSecondPage}>
                    <Droppable droppableId="matchestodayMatchesSecond">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} style={{ width: '100%' }}>
                                {secondPageItems.map((el, i) => (
                                    <Draggable
                                        index={i}
                                        key={Math.random()}
                                        draggableId={el.id}
                                    >
                                        {(provided) => (
                                            <div
                                                style={{ width: '100%' }}
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
                                                    clickBuy={() => router.push({
                                                        pathname: '/prediction',
                                                        query: { game: el.id }
                                                    })}
                                                />
                                            </div>
                                        )}
                                    </Draggable>)
                                )}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <RowTitle rowStyles={{ minHeight: '34px' }} />
            </div>
        </Carousel>
    )
}

