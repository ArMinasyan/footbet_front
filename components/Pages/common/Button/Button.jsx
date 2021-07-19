// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './Button.module.scss'

export function Button({
    textPathName = "You are dont put there text.",
    active,
    click = null,
    locationInMainPage = "Change translation location." }) {

    const
        // translation consfigs
        { t } = useTranslation('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={`${styles.container} ${active && styles.active}`}>
            <div className={styles.content}
                onClick={click}
            >
                <pre>
                    {
                        translate(textPathName)
                    }
                </pre>
            </div>
        </div>
    )
}
