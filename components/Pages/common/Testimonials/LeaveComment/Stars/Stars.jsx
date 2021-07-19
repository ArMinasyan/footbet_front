import { useState } from 'react'
// styles 
import styles from './Stars.module.scss'
// icons 
import filledStar from '/public/images/main/feedbacks/filledStar.png'
import unfilledStar from '/public/images/main/feedbacks/unfilledStar.png'


export function Stars() {

    const
        // states
        stars = [0, 1, 2, 3, 4],
        [simulator, setSimulator] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {
                    stars.map(el =>
                        simulator > el ?
                            (<img
                                src={filledStar.src}
                                alt=""
                                onClick={() => setSimulator(el )}
                            />)
                            :
                            (<img
                                src={unfilledStar.src}
                                alt=""
                                onClick={() => setSimulator(el + 1)}
                            />))
                }
            </div>
        </div>
    )
}
