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
import { Ball } from '../../common/auth/BallRightCorner/Ball'

import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'


export function Form({ title }) {
    const router = useRouter();

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
        <>
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
                        other={register('file')}
                    />
                    <InputContainer
                        label={userIcon}
                        id='name'
                        type='text'
                        placeholder={translate('fullName')}
                        errors={(!!errors.name)}
                        other={register('name')}
                    />
                    <InputContainer
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
                        errors={!!errors.number}
                        other={register('number')}
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

            </div>
            <div className={styles.ball}>
                <Ball />
            </div>
        </>
    )
}
