// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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
        // yup configs
        schema = yup.object().shape({
            name: yup
                .string()
                .required()
                .matches(/^[a-zA-Z]+$/mg),
            birthDate: yup
                .string()
                .required()
            ,
            email: yup
                .string()
                .required()
                .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
            number: yup
                .string()
                .required()
                .matches(/^[0-9]+$/mg),
            password: yup
                .string()
                .required()
                .min(6)
        }),
        // form configs
        { register, handleSubmit, formState: { errors } } = useForm({
            mode: 'onChange',
            resolver: yupResolver(schema)
        }),
        // inputs
        // inputs = [
        //     {
        //         label: userIcon,
        //         id: 'name',
        //         type: 'text',
        //         key: Math.random(),
        //         placeholder: translate('fullName'),
        //         errors: (!!errors.name),
        //         other: { ...register('name') }
        //     },
        //     {
        //         label: calendar,
        //         id: 'birth_date',
        //         type: 'text',
        //         key: Math.random(),
        //         placeholder: translate('birthDate'),
        //         errors: (!!errors.birthDate),
        //         other: {
        //             ...register('birthDate'),
        //             onFocus: (e) => e.target.type = 'date',
        //             onBlur: (e) => e.target.type = 'text'
        //         }
        //     },
        //     {
        //         label: email,
        //         id: 'email',
        //         type: 'text',
        //         key: Math.random(),
        //         placeholder: translate('email'),
        //         errors: (!!errors.email),
        //         other: { ...register('email') },
        //     },
        //     {
        //         label: phone,
        //         id: 'phone_number',
        //         type: 'text',
        //         key: Math.random(),
        //         placeholder: translate('phone'),
        //         errors: (!!errors.number),
        //         other: { ...register('number') },
        //     },
        //     {
        //         label: key,
        //         id: 'password',
        //         type: 'password',
        //         key: Math.random(),
        //         placeholder: translate('password'),
        //         errors: (!!errors.password),
        //         other: { ...register('password') },
        //     }
        // ],
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
                <InputConteiner
                    label={userIcon}
                    id='name'
                    type='text'
                    placeholder={translate('fullName')}
                    errors={(!!errors.name)}
                    other={register('name')}
                />
                <InputConteiner
                    label={calendar}
                    id='birth_date'
                    type='text'
                    placeholder={translate('birthDate')}
                    errors={(!!errors.birthDate)}
                    other={{
                        ...register('birthDate'),
                        onFocus: (e) => e.target.type = 'date',
                        onBlur: (e) => e.target.type = 'text'
                    }}
                />
                <InputConteiner
                    label={email}
                    id='email'
                    type='text'
                    placeholder={translate('email')}
                    errors={!!errors.email}
                    other={register('email')}
                />
                <InputConteiner
                    label={phone}
                    id='phone_number'
                    type='text'
                    placeholder={translate('phone')}
                    errors={!!errors.number}
                    other={register('number')}
                />
                <InputConteiner
                    label={key}
                    id='password'
                    type='password'
                    placeholder={translate('password')}
                    errors={!!errors.password}
                    other={register('password')}
                />
                <Button
                    title={translate('buttonTitle')}
                />
            </form>
        </div>
    )
}
