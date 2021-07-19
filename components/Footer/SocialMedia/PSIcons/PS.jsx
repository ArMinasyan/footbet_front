// styles
import styles from './PS.module.scss'
// icons
import payPal from '/public/images/footer/paypal.png'
import visa from '/public/images/footer/visa.png'
import masterCard from '/public/images/footer/masterCard.png'
// components
import { Icon } from '../common/Icon/Icon'


export function PS() {

    const
        // config
        icons = [
            {
                key: Math.random(),
                src: payPal.src,
            },
            {
                key: Math.random(),
                src: visa.src,
            },
            {
                key: Math.random(),
                src: masterCard.src,
                lastElement: true
            },
        ]

    return (
        <>
            <div className={styles.container}>
                {
                    icons.map(el => (
                        <Icon
                            key={el.key}
                            src={el.src}
                            lastElement={el.lastElement && el.lastElement}
                        />
                    ))
                }
            </div>
        </>
    )
}
