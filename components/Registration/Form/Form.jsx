// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
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
import { request } from '../../../lib/er.lib'
import { REGISTER } from '../../../lib/request-destinations'


export function Form({ title }) {

    const
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = 'registration.inputPlaceHolders.',
        translate = key => t(`${translationPath}${key}`),
        // form configs
        { register, handleSubmit, formState: { errors } } = useForm({
            mode: 'onChange'
        }),
        // inputs
        inputs = [
            {
                label: userIcon,
                id: 'name',
                type: 'text',
                key: Math.random(),
                placeholder: translate('fullName'),
                other: { ...register('name') },
            },
            {
                label: calendar,
                id: 'birth_date',
                type: 'text',
                key: Math.random(),
                placeholder: translate('birthDate'),
                other: { ...register('birthDate') },
            },
            {
                label: email,
                id: 'email',
                type: 'email',
                key: Math.random(),
                placeholder: translate('email'),
                other: { ...register('email') },
            },
            {
                label: phone,
                id: 'phone_number',
                type: 'text',
                key: Math.random(),
                placeholder: translate('phone'),
                other: { ...register('number') },
            },
            {
                label: key,
                id: 'password',
                type: 'password',
                key: Math.random(),
                placeholder: translate('password'),
                other: { ...register('password') },
            }
        ],
        // send form values
        submit = (data) => {
            console.log(data);
            // const registerFormData = new FormData();
            // Object.entries(data).forEach(([key, item]) => {
            //     registerFormData.append(key, item);
            // })
            // try {
            // request(REGISTER, registerFormData)
            // } catch (error) {
            //     console.log(error);
            // }
        }


    return (
        <div className={styles.conteiner}>
            <div>
                <h1>
                    {
                        title
                    }
                </h1>
            </div>
            <form
                onSubmit={(handleSubmit(submit))}
            >
                <FileInput
                    id='upload_file_input'
                    type='file'
                    other={register('file')}
                />
                {
                    inputs.map(el => (
                        <InputConteiner
                            key={el.key}
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
