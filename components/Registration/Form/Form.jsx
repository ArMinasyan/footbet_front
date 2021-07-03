// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// components
import { InputConteiner } from './InputConteiner/InputConteiner'
import { FileInput } from './FileInput/FileInput'
import { Button } from './Button/Button'
// styles
import styles from './Form.module.scss'
// icons 
import userIcon from '/public/images/register/user-input.svg'
import calendar from '/public/images/register/calendar.svg'
import email from '/public/images/register/mail.svg'
import phone from '/public/images/register/phone.svg'
import key from '/public/images/register/key.svg'


export function Form({ title }) {

    const
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = 'registration.inputPlaceHolders.',
        translate = key => t(`${translationPath}${key}`),
        // inputs
        inputs = [
            {
                label: userIcon,
                id: 'name',
                type: 'text',
                placeholder: translate('fullName'),
                other: '',
            },
            {
                label: calendar,
                id: 'birth_date',
                type: 'text',
                placeholder: translate('birthDate'),
                other: '',
            },
            {
                label: email,
                id: 'email',
                type: 'email',
                placeholder: translate('email'),
                other: '',
            },
            {
                label: phone,
                id: 'phone_number',
                type: 'text',
                placeholder: translate('phone'),
                other: '',
            },
            {
                label: key,
                id: 'birth_date',
                type: 'password',
                placeholder: translate('password'),
                other: '',
            }
        ]

    return (
        <div className={styles.conteiner}>
            <div>
                <h1>
                    {
                        title
                    }
                </h1>
            </div>
            <form action="">
                <FileInput />
                {
                    inputs.map(el => (
                        <InputConteiner
                            key={el.id}
                            label={el.label}
                            id={el.id}
                            type={el.type}
                            placeholder={el.placeholder}
                            other={el.other}
                        />
                    ))
                }
                <Button
                    title={translate('buttonTitle')}
                />
            </form>
        </div>
    )
}
