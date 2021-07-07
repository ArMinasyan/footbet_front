// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
//components
import { InputContainer } from '/components/common/auth/InputContainer/InputContainer'
// styles 
import styles from './LoginForm.module.scss'

export function LoginForm({ title }) {

    const
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = 'registration.inputPlaceHolders.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
        schema = yup.object().shape({
            email: yup
                .string()
                .required()
                .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
            password: yup
                .string()
                .required()
                .min(6)
        }),
        // form configs
        { register, handleSubmit, formState: { errors } } = useForm({
            mode: 'onChange',
            resolver: yupResolver(schema)
        })

    return (
        <div className={styles.container}>
            <div className={styles.form_title}>
                <h2>
                    {
                        title
                    }
                </h2>
            </div>
            <InputContainer
                id='name'
                type='text'
                placeholder={translate('email')}
                errors={(!!errors.email)}
                other={register('email')}
            />
            <InputContainer
                id='password'
                type='password'
                placeholder={translate('password')}
                errors={!!errors.password}
                other={register('password')}
            />
        </div>
    )
}
