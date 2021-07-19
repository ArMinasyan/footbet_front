// components
import { SM } from './SMIcons/SM'
import { PS } from './PSIcons/PS'
// styles
import styles from './SocialMedia.module.scss'
// translation 
import useTranslation from 'next-translate/useTranslation'


export function SocialMedia() {

    const
        // translation
        { t } = useTranslation('common'),
        translationPath = 'footer.social_media_paymants',
        translate = (key) => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.controler}>
                    <div className={styles.social_medias}>
                        <p>
                            {
                                translate('.SM.title')
                            }
                        </p>
                        <SM />
                    </div>
                    <div className={styles.payment_systems}>
                        <p>
                            {
                                translate('.PS.title')
                            }
                        </p>
                        <PS />
                    </div>
                </div>
            </div>
        </div >
    )
}
