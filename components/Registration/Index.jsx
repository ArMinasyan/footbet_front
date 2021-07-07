// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// components
import { Form } from "./Form/Form"

export function Index() {

    // translation consfigs
    const
        { t } = useTranslation('common'),
        translationPath = 'registration.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <>
            <Form
                title={translate('title')}
            />
        </>
    )
}
