import { slide_show_data } from './slide_show_data'
// components
import Carousel from 'react-elastic-carousel'
// styles 
import styles from './Slide.module.scss'
import { Item } from './SlideItems/Item/Item'

export function Slide() {

    const slide_data = slide_show_data()

    return (
        <div className={styles.container}>
            <Carousel
                itemsToShow={4}
                itemsToScroll={2}
                itemPadding={[35,12]}
                className={styles.carousel}
            >
                {
                    slide_data.map(el => (
                        <Item
                            img_src={el.url}
                            description={el.description}
                        />
                    ))
                }
            </Carousel>
        </div>
    )
}
