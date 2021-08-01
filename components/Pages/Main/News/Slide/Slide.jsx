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
import { useEffect } from 'react'
import { request } from '../../../../../lib/er.lib'
import { GET_NEWS } from '../../../../../lib/request-destinations'




export function Slide() {

    const [ slide_data, setSlideData ] = useState([]);
    
    useEffect(()=>{
        request( GET_NEWS, {}, { auth: true })
            .then( news => {
                setSlideData( news.data.data );
            })
            .catch( err => {
                console.log( err );
            })
    },[])

    const
        // consts and states 
        // breakpoints for slide 
        breakpoints = [
            { width: 375, itemsToShow: 2, itemsToScroll: 2 },
            { width: 740, itemsToShow: 3, itemsToScroll: 3 },
            { width: 1700, itemsToShow: 4, itemsToScroll: 4 }
        ]


    return (
        <>
            <div className={styles.container}>
                <Carousel
                    itemPadding={[35, 12]}
                    renderArrow={Arrow}
                    renderPagination={Pagination}
                    className={styles.carousel}
                    breakPoints={breakpoints}
                >
                    {
                        slide_data.map(el => (
                            <Item
                                img_src={el.img_path}
                                title={el.title}
                                description={el.text}
                                key={Math.random()}
                            />
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}
