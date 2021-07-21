import { slide_show_data } from './slide_show_data'
import { useState } from 'react'
// components
import Carousel from 'react-elastic-carousel'
import { Item } from './SlideItems/Item/Item'
import { Arrow } from './SlideItems/Arrows/Arrow'
import { Pagination } from './SlideItems/Pagination/Pagination'
import { ItemModal } from './SlideItems/ItemModal/ItemModal'
// styles 
import styles from './Slide.module.scss'




export function Slide() {

    const
        // consts and states 
        slide_data = slide_show_data()


    return (
        <>
            <div className={styles.container}>
                <Carousel
                    itemsToShow={4}
                    itemsToScroll={2}
                    itemPadding={[35, 12]}
                    renderArrow={Arrow}
                    renderPagination={Pagination}
                    className={styles.carousel}
                >
                    {
                        slide_data.map(el => (
                            <Item
                                img_src={el.url}
                                title={el.title}
                                description={el.description}
                                key={Math.random()}
                            />
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}