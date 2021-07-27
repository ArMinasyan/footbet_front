// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// styles
import styles from './Button.module.scss'

export function Button({
    page = 'common',
    textPathName = "You are dont put there text.",
    locationInPage = "",
    aditionalStyles = null,
    active =false,
    click = null, }) {

    const
        // translation consfigs
        { t } = useTranslation(page),
        translationPath = `${locationInPage}`,
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={`${styles.container} ${aditionalStyles} ${active ? styles.active : ''}`}>
            <div className={ `${styles.content}` }
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
