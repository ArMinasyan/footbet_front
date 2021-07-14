// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// styles 
import styles from './Slide.module.scss'

export function Slide() {

    const
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = 'registration.inputPlaceHolders.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <div>
            Slide
        </div>
    )
}
