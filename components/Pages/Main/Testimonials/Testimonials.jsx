// components
import { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Title } from '../common/Title/Title'
import { Arrow } from './Arrows/Arrow'
import { FeedBack } from './FeedBack/FeedBack'
import { feedback_data } from './feed_back_data'
import { Pagination } from './Pagination/Pagination'
import { Sorting } from './Sorting/Sorting'
// styles
import styles from './Testimonials.module.scss'

export function Testimonials() {

    const
        // states
        [feedBacks, setFeedBacks] = useState(feedback_data),
        [updateThisComponent, setUpdatethisComponent] = useState(true),
        // functions
        sortDataByDate = () => {
            const sortedByDataFeedBacks = feedBacks.sort((a, b) => (
                b.date - a.date
            ))
            setFeedBacks(sortedByDataFeedBacks)
            setUpdatethisComponent(true)
        },
        sortDataByRate = () => {
            const sortedByRateFeedBacks = feedBacks.sort((a, b) => (
                a.rateing - b.rateing
            ))
            setFeedBacks(sortedByRateFeedBacks)
            setUpdatethisComponent(true)
            console.log(sortedByRateFeedBacks);
        }

    return (
        <>
            {updateThisComponent &&
                <div className={styles.container}>
                    <Title
                        locationInMainPage='testimonials'
                        textPathName='.title'
                    />
                    <div className={styles.feed_backs_container}>
                        <Sorting
                            sortingText='Сортироавть:'
                            dateSortingText='по дате'
                            rateSorting='по оценке'
                            sortByData={sortDataByDate}
                            sortByRate={sortDataByRate}
                        />
                        <Carousel
                            renderArrow={Arrow}
                            renderPagination={Pagination}
                            itemsToShow={1}
                            itemsToScroll={1}
                        >
                            <div style={{ width: '100%' }}>
                                {
                                    feedback_data.map(el => (
                                        <FeedBack
                                            avatar={el.avatar}
                                            nikName={el.nikName}
                                            rateing={el.rateing}
                                            description={el.description}
                                            date={el.date}
                                            likes={el.likes}
                                            disLikes={el.disLikes}
                                            key={Math.random()}
                                        />
                                    ))
                                }
                            </div>
                            <div style={{ width: '100%' }}>
                                {
                                    feedBacks.map(el => (
                                        <FeedBack
                                            avatar={el.avatar}
                                            nikName={el.nikName}
                                            rateing={el.rateing}
                                            description={el.description}
                                            date={el.date}
                                            likes={el.likes}
                                            disLikes={el.disLikes}
                                            key={Math.random()}
                                        />
                                    ))
                                }
                            </div>
                        </Carousel>
                    </div>
                </div>
            }
            {
                console.log(1)
            }
        </>
    )
}
