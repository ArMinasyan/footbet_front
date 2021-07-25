// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// components
import { InputContainer } from '/components/common/auth/InputContainer/InputContainer'
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

import { ToastContainer, toast } from 'react-toastify';


export function Form({ title }) {

    const
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = 'registration.inputPlaceHolders.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
        schema = yup.object().shape({
            username: yup
                .string()
                .required()
                .matches(/(^[A-Za-z]{1,8})([ ]{0,1})([A-Za-z]{1,10})/mg),
            dateOfBirth: yup
                .string()
                .required()
            ,
            email: yup
                .string()
                .required()
                .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
            mobile: yup
                .string()
                .required()
                .matches(/^[+]{1}[0-9]+$/mg),
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
        submit = async (data) => {
            const registerFormData = new FormData();
            Object.entries(data).forEach(([key, item]) => {
                if ( key === `dateOfBirth` )
                    item = item ? item.split(`-`).reverse().join(`.`) : `01.01.1970`
                if (key !== `profile_img`)
                    registerFormData.append(key, item);
                else if (item.length > 0)
                    registerFormData.append(key, item[0])
            })

            try {
                await request(REGISTER, registerFormData);
                toast(`Successfully registered`);
            } catch (error) {
                toast(error.response?.data?.message || `unknown error`, {
                    type: `error`
                });
            }
        }

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <p>
                    {
                        title
                    }
                </p>
            </div>
            <form
                onSubmit={(handleSubmit(submit))}
            >
                <FileInput
                    id='upload_file_input'
                    type='file'
                    other={register('profile_img')}
                />
                <InputContainer
                    label={userIcon}
                    id='name'
                    type='text'
                    placeholder={translate('fullName')}
                    errors={(!!errors.username)}
                    other={register('username')}
                />
                <InputContainer
                    label={calendar}
                    id='birth_date'
                    type='text'
                    placeholder={translate('birthDate')}
                    errors={(!!errors.dateOfBirth)}
                    other={{
                        ...register('dateOfBirth'),
                        onFocus: (e) => e.target.type = 'date',
                        onBlur: (e) => e.target.type = 'text'
                    }}
                />
                <InputContainer
                    label={email}
                    id='email'
                    type='text'
                    placeholder={translate('email')}
                    errors={!!errors.email}
                    other={register('email')}
                />
                <InputContainer
                    label={phone}
                    id='phone_number'
                    type='text'
                    placeholder={translate('phone')}
                    errors={!!errors.mobile}
                    other={register('mobile')}
                />
                <InputContainer
                    label={key}
                    id='password'
                    type='password'
                    placeholder={translate('password')}
                    errors={!!errors.password}
                    other={register('password')}
                />
                <Button
                    content={translate('buttonTitle')}
                />
            </form>
            <ToastContainer />
        </div>
    )
}
