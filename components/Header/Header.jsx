// hooks
import { useSelector } from 'react-redux'
//styles
import styles from './Header.module.scss'
// components
import { Bar } from './Bar/Bar'
import { NavBar } from './NavBar/NavBar'
import { SocialMedia } from './SocialMedia/SocialMedia'
// imges
import footballer from '/public/images/header/footballer.svg'

export function Header({ mainsPages }) {

    return (
        <>
            {mainsPages ?
                <div className={styles.header_container_big}>
                    <div className={styles.bar}>
                        <SocialMedia />
                        <div className={styles.bar_controler}>
                            <div className={styles.bar_conteiner}>
                                <div className={styles.bar_content}>
                                    <Bar
                                        bar_items_cont={styles.bar_items_cont}
                                        bar_items={styles.bar_items}
                                    />
                                </div>
                            </div>
                            <div className={styles.footballer}>
                                <img src={footballer.src} alt="" />
                            </div>
                        </div>
                    </div>
                    <NavBar />
                </div> :
                <div className={styles.header_container_small}>
                    <Bar />
                    <NavBar />
                </div>
            }
        </>

    )
}

