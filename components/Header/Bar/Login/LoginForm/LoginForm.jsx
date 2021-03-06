// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { request, setCookie } from '../../../../../lib/er.lib';
//components
import { InputContainer } from '/components/common/auth/InputContainer/InputContainer'
import { Title } from '../common/Title'
import { ResetPasswordLink } from '../common/ResetPasswordLink'
import { Submit } from '../common/Submit'
import { ToRegister } from '../common/ToRegister'
// styles 
import styles from './LoginForm.module.scss'
import { useDispatch } from 'react-redux'
import { login } from '../../../../../redux/features/userSlice'
import { GET_ACCOUNT_INFO, LOGIN } from '../../../../../lib/request-destinations';

import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/dist/client/router';


export function LoginForm({ onModalClose, handleResetPassModal }) {
    const router = useRouter();

    const
        dispatch = useDispatch(),
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = 'registration.inputPlaceHolders.',
        translate = key => t(`${translationPath}${key}`),
        handle_to_register_click = () => {
            document.querySelector('body').style.overflow = 'visible'
            onModalClose()
        },
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
        }),
        // on form submit
        submit = async (data) => {
          console.log(data);
            try {
                const { token } = (await request( LOGIN, data )).data?.data;
                setCookie( `access-token`, token, 1 );
                const user = ( await request( GET_ACCOUNT_INFO, {}, {auth: true} ) ).data?.data;
                dispatch(login(user));
                router.push(`/`);
                handle_to_register_click()
            }
            catch( error ) {
                toast( error.response.data?.message || `???????????????? ?? ??????????`, {
                    type: `error`
                });
            }
        };

        

    return (
        <div className={styles.container}>
            <Title
                styles={styles.title}
                content={t('header.loginModal.title')}
            />
            <form onSubmit={handleSubmit(submit)}>
                <div className={styles.inputs}>
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
                <ResetPasswordLink
                    click={handleResetPassModal}
                    styles={styles.reset_password}
                    content={t('header.loginModal.resPassword')}
                />
                <Submit
                    styles={styles.submit}
                    content={t('header.loginModal.submit')}
                />
            </form>
            <ToRegister
                href='/registration'
                click={handle_to_register_click}
                container_styles={styles.to_register_container}
                content_styles={styles.to_register_content}
                or={t('header.loginModal.or')}
                register_text_styles={styles.to_register_text}
                content={t('header.loginModal.register')}
            />


            <ToastContainer />
        </div>
    )
}
