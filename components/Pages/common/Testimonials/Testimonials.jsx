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

export function Testimonials({
    page,
    locationInPage,
    textPathName
}) {    

    const
        { t } = useTranslation(`home`),
        translationPath = 'testimonials.sorting.',
        translate = (key) => t(`${translationPath}${key}`)
    const
        // states
        [feedBacks, setFeedBacks] = useState([]),
        [dateActive, setDateActive] = useState(true)

    useEffect( ()=>{
        request( GET_FEEDBACK )
            .then( predictions => {
                console.log( predictions.data.data );
            })
            .catch( err => {console.log(err)})
    }, [] );
    // function for sorting
    const sorting = (toSort, sortingBy, dateActive) => {
        let
            dataForSorting = toSort.reduce((ac, el) => ac.concat(el)),
            sortedData = [],
            sorted = []

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
                            sortingText={translate("sort")}
                            dateSortingText={translate("byDate")}
                            rateSorting={translate("byRate")}
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
