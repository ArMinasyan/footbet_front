// styles
import styles from './BoardHeader.module.scss'
// translations
import useTranslation from 'next-translate/useTranslation'

export function BoardHeader() {

    const
        // translation consfigs
        { t } = useTranslation('personal'),
        translationPath = 'board.headers.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>{translate('gamesHistory')}</p>
            </div>
            <div className={styles.right}>
                <div>
                    <p>
                        {translate('prediction')}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('date')}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('score')}
                    </p>
                </div>
                <div>
                    <p>
                        {translate('price')}
                    </p>
                </div>
            </div>
        </div>
    )
}
