// components
import { useState } from 'react'
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

export function Testimonials({
    page,
    locationInPage,
    textPathName
}) {

    const
        // states
        [feedBacks, setFeedBacks] = useState(feedback_data),
        [dateActive, setDateActive] = useState(true),
        // functions
        sortDataByDate = () => {
            const sortedByDataFeedBacks = feedBacks.sort((a, b) => (
                b.date.sortFormat - a.date.sortFormat
            ))
            setFeedBacks([...sortedByDataFeedBacks])
            setDateActive(true)
        },
        sortDataByRate = () => {
            const sortedByRateFeedBacks = feedBacks.sort((a, b) => (
                b.rateing - a.rateing
            ))
            setFeedBacks([...sortedByRateFeedBacks])
            setDateActive(false)
        },
        reactions = [
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
                            sortingText='Сортироавть:'
                            dateSortingText='по дате'
                            rateSorting='по оценке'
                            sortByDate={sortDataByDate}
                            sortByRate={sortDataByRate}
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
                                feedBacks.map(page => (
                                    <div style={{ width: '100%' }} key={Math.random()}>
                                        {
                                            page.map(el => (
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
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </Carousel>
                        <LeaveComment />
                    </div>
                </div>
            }
        </>
    )
}
