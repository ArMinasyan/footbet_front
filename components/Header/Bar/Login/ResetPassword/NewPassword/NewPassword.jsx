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
import { ToastContainer, toast } from 'react-toastify';

// styles
import styles from './NewPassword.module.scss'
import { Success } from '../Success/Success'

import { request, getCookie } from '/lib/er.lib';
import { SET_NEW_PASSWORD } from '../../../../../../lib/request-destinations'


export function NewPassword({ onModalClose }) {
    const
        // modal states pass => password Ml => Modal
        [showNewPassMl, setShowNewPassMl] = useState(true),
        [showSuccessMl, setShowSuccessMl] = useState(false),
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = 'header.newPasswordModal.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
        schema = yup.object().shape({
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
        submit = async ( data ) => {
            try {
                await request( SET_NEW_PASSWORD, { password: data.password }, {
                    headers: {
                        'Authorization': `Bearer ${getCookie(`reset-token`)}`
                    }
                })
                setShowNewPassMl(false)
                setShowSuccessMl(true)
            }
            catch ( err ) {
                toast( err.response.data?.message || `unknown error`, {
                    type: `error`
                });
            }
        }

    return (
        <>
            {showNewPassMl &&
                <Modal onClose={onModalClose} contentStyles={styles.m_content} containerStyles={styles.m_container}>
                    <div className={styles.container}>
                        <Title
                            styles={styles.title}
                            content={translate('title')}
                        />
                        <form onSubmit={handleSubmit(submit)}>
                            <div className={styles.inputs}>
                                <InputContainer
                                    id='password'
                                    type='password'
                                    placeholder={t('registration.inputPlaceHolders.password')}
                                    errors={!!errors.password}
                                    other={register('password')}
                                />
                            </div>
                            <Submit
                                styles={styles.submit}
                                content={translate('success')}
                            />
                        </form>
                    </div>
                    <ToastContainer />
                </Modal>
            }
            {
                showSuccessMl && <Success onModalClose={onModalClose} />
            }
        </>
    )
}
