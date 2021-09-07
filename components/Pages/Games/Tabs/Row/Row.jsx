// translation 
import useTranslation from 'next-translate/useTranslation'
// styles 
import styles from './Row.module.scss'

export function Row({
    order,
    teamOneName,
    teamOneIcon,
    teamTwoName,
    teamTwoIcon,
    prediction,
    date,
    time,
    coefficent,
    price,
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
                        <div className={styles.leftItems}>
                            <span>{teamOneName}</span>
                        </div>
                        <div className={styles.leftItems}>
                            <img src={teamOneIcon} alt="" />
                        </div>
                    </div>
                    <div className={styles.leftItems}>
                        <span className={styles.vs}>VS.</span>
                    </div>
                    <div className={styles.teamTwo}>
                        <div className={styles.leftItems}>
                            <span>{teamTwoName}</span>
                        </div>
                        <div className={styles.leftItems}>
                            <img src={teamTwoIcon} alt="" />
                        </div>
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
