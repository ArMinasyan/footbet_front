// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
// styles 
import styles from './Title.module.scss'


export function Title({
    page = 'common',
    textPathName = 'You are dont put there text.',
    locationInPage = '',
    textStyles = null,
    href
}) {

    const
        // translation consfigs
        { t } = useTranslation(page),
        translationPath = `${locationInPage}`,
        translate = key => t(`${translationPath}${key}`)

    return (
        <div className={styles.container}>
            {
                href ?
                    <Link href={href}>
                        <p style={textStyles} style={{ cursor: 'pointer' }}>
                            {
                                translate(`${textPathName}`)
                            }
                        </p>
                    </Link>
                    :
                    <p style={textStyles}>
                        {
                            translate(`${textPathName}`)
                        }
                    </p>
            }
        </div>
    )
}
