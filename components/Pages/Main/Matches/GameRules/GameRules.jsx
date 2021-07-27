// components
import Carousel from 'react-elastic-carousel'
import { Arrow } from './Arrows/Arrow'

import { Pagination } from './Pagination/Pagination'
// styles
import styles from './GameRules.module.scss'
import { game_rules } from './game_rules'
import { SlidePages } from './SlidePage/SlidePages'

export function GameRules() {
    return (
        <div className={styles.container}>
            <Carousel
                renderArrow={Arrow}
                renderPagination={Pagination}
            >
                {
                    game_rules.map(el => (
                        <SlidePages
                            pageData={el}
                        />
                    ))
                }
            </Carousel>
        </div>
    )
}
