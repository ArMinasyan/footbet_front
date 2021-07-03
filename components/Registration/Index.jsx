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
        <div>
            <Form
                title={translate('title')}
            />
        </div>
    )
}
