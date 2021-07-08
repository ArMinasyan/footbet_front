// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
//components
import { Title } from '../../common/Title'
import { InputContainer } from '/components/common/auth/InputContainer/InputContainer'
import { Submit } from '../../common/Submit'
import { Modal } from '../../../../../common/auth/Modal/Modal'
import { GetEmailCode } from '../GetEmailCode/GetEmailCode'
// styles
import styles from './ForgotPassword.module.scss'



export function ForgotPassword({ onModalClose }) {

    const
        // modal states pass => password Ml => Modal
        [showForgotPassMl, setShowForgotPassMl] = useState(true),
        [showGetEmailCodeMl, setShowEmailCodeMl] = useState(false),
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = 'header.resetPasswordModal.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
        schema = yup.object().shape({
            email: yup
                .string()
                .required()
                .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        }),
        // form configs
        { register, handleSubmit, formState: { errors } } = useForm({
            mode: 'onChange',
            resolver: yupResolver(schema)
        }),
        // on form submit
        submit = (data) => console.log(data)

    return (
        <>
            {showForgotPassMl &&
                <Modal onClose={onModalClose}>
                    <div className={styles.container}>
                        <Title
                            styles={styles.title}
                            content={translate('title')}
                        />
                        <form onSubmit={handleSubmit(submit)}>
                            <div className={styles.inputs}>
                                <InputContainer
                                    id='name'
                                    type='text'
                                    placeholder={t('registration.inputPlaceHolders.email')}
                                    errors={(!!errors.email)}
                                    other={register('email')}
                                />
                            </div>
                            <Submit
                                styles={styles.submit}
                                content={translate('send')}
                                click={()=>{
                                    setShowForgotPassMl(false)
                                    setShowEmailCodeMl(true)
                                }}
                            />
                        </form>
                    </div>
                </Modal>
            }
            {
                showGetEmailCodeMl && <GetEmailCode onModalClose={onModalClose} />
            }
        </>


    )
}
