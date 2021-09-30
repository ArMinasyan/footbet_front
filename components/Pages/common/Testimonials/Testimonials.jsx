// hooks and helpers
import { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
// components
import Carousel from 'react-elastic-carousel'
import { Title } from '../Title/Title'
import { Arrow } from './Arrows/Arrow'
import { FeedBack } from './FeedBack/FeedBack'
import { feedback_data } from './feed_back_data'
import { LeaveComment } from './LeaveComment/LeaveComment'
import { Pagination } from './Pagination/Pagination'
import { Sorting } from './Sorting/Sorting'
// styles
import styles from './Testimonials.module.scss'
import { request } from '../../../../lib/er.lib'
import { GET_FEEDBACK } from '../../../../lib/request-destinations'
import { useSelector } from 'react-redux'
import { selectUser } from '/redux/features/userSlice'
import { getMatchId } from '../../../../redux/features/matchSlice'

import avatar from '/public/images/main/feedbacks/avatar.png'

export function Testimonials({
    page,
    locationInPage,
    textPathName
}) {
    const user = useSelector(selectUser);
    const matchId = useSelector(getMatchId);
    const
        // states
        [feedBacks, setFeedBacks] = useState([]),
        [dateActive, setDateActive] = useState(true)

    useEffect(() => {
        if (matchId !== null  && matchId !== undefined) {
            request(GET_FEEDBACK())
                .then(predictions => {
                    setFeedBacks(
                        predictions.data.data.map(feedBack => ({
                            avatar: avatar.src,
                            nikName: feedBack.username,
                            rateing: feedBack.stars,
                            description: feedBack.comment,
                            date: {
                                renderFormat: "13.07.2021",
                                sortFormat: new Date("2021-07-13")
                            },
                            likes: +feedBack.likeCount,
                            disLikes: +feedBack.dislikeCount
                        }))

                    );
                })
                .catch(err => {  })
        }
    }, [matchId])

    // function for sorting
    const sorting = (toSort, sortingBy, dateActive) => {
        if (toSort.length > 0) {
            let
                dataForSorting = toSort,
                sortedData = [],
                sorted = []

                console.log( toSort, dataForSorting );
            if (sortingBy === "date") sorted = dataForSorting.sort((a, b) => (b.date.sortFormat - a.date.sortFormat))
            else if (sortingBy === "rate") sorted = dataForSorting.sort((a, b) => (b.rateing - a.rateing))

            for (let i = 1; i <= Math.ceil(dataForSorting.length / 3); i++) {
                let sortedItems = []
                sorted.forEach((el, x) => {
                    (x < i * 3) && (x >= ((i * 3) - 3)) && sortedItems.push(el)
                })
                sortedData.push(sortedItems)
            }
            setFeedBacks(sortedData)
            setDateActive(dateActive)
        }
    }
    // Artificial reactions data
    const reactions = [
        {
            username: "Lorem Ipsum",
            reaction: true
        },
        {
            username: "Lorem Ipsum",
            reaction: false
        },
        {
            username: "Lorem Ipsum",
            reaction: true
        }
    ]

    return (
        <>
            {feedBacks &&
                <div className={styles.container}>
                    <Title
                        page={page}
                        textPathName={textPathName}
                        locationInPage={locationInPage}
                    />
                    <div className={styles.feed_backs_container}>
                        <Sorting
                            sortingText={"sort"}
                            dateSortingText={"byDate"}
                            rateSorting={"byRate"}
                            sortByDate={() => { sorting(feedBacks, "date", true) }}
                            sortByRate={() => { sorting(feedBacks, "rate", false) }}
                            dateActive={dateActive}
                        />
                        <Carousel
                            renderArrow={Arrow}
                            renderPagination={Pagination}
                            itemsToShow={1}
                            itemsToScroll={1}
                            className={styles.carousel}
                        >
                            {
                                feedBacks.map(el => (
                                    <div style={{ width: '100%' }} key={Math.random()}>
                                        {
                                            <FeedBack
                                                avatar={el.avatar}
                                                nikName={el.nikName}
                                                rateing={el.rateing}
                                                description={el.description}
                                                date={el.date.renderFormat}
                                                likes={el.likes}
                                                disLikes={el.disLikes}
                                                key={Math.random()}
                                                reactionsForTesting={reactions}
                                            />
                                        }
                                    </div>
                                ))
                            }
                        </Carousel>
                        {user && <LeaveComment matchId={matchId} />}
                    </div>
                </div>
            }
        </>
    )
}
