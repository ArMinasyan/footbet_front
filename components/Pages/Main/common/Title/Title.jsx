// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// styles 
import styles from './Title.module.scss'


export function Title({
    textPathName = "You are dont put there text.",
    locationInMainPage = "Change translation location.",
    textStyles = null }) {

    const
        // translation consfigs
        { t } = useTranslation('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            <p style={textStyles}>
                {
                    translate(`${textPathName}`)
                }
            </p>
        </div>
    )
}
