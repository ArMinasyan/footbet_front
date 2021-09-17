// translation 
import useTranslation from 'next-translate/useTranslation'
// styles 
import styles from './Row.module.scss'

export function Row({
    order,
    price,
    text,
    clickBuy
}) {

    const
        // translation consfigs
        { t } = useTranslation('games'),
        translationPath = 'tabs.header.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.leftItems}>
                        <span className={styles.order}>{order}.</span>
                    </div>
                    <div className={styles.teamOne}>
                      
                    </div>
                    <div className={styles.leftItems}>
                    { text }
                    </div>
                    <div className={styles.teamTwo}>
                    </div>
                    
                </div>
                <div className={styles.right}>
                    <div className={styles.price}>
                        <span className={styles.price_title}>{translate('price')}</span>
                        <span>{price}</span>
                    </div>
                    <div className={styles.buyButton_container}>
                        <div
                            className={styles.button_content}
                            onClick={clickBuy}
                        >
                            <span>
                                {t('common:commons.buy')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
