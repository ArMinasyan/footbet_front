// styles
import Carousel from 'react-elastic-carousel'
import styles from './PrdeictionSlide.module.scss'

export function PrdeictionSlide() {
    return (
        <div className={styles.container}>
            <Carousel
                pagination={false}
            >

            </Carousel>
        </div>
    )
}
