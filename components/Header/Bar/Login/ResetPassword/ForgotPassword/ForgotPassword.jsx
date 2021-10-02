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

import { request, setCookie } from '/lib/er.lib';

import { ToastContainer, toast } from 'react-toastify';
import { START_RESET_PASSWORD } from '../../../../../../lib/request-destinations'


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
    submit = async (data) => {
      try {
        const { data: response } = await request(START_RESET_PASSWORD(data.email));
        const token = response.data.token;
        setCookie(`reset-token`, token, (1 / 24) * 1);
        setShowForgotPassMl(false)
        setShowEmailCodeMl(true)
      } catch (err) {
        // toast( err.response.data?.message || `Не удалось востановить пароль`, {
        //     type: `error`
        // });
        if (!error.response.success) {
          toast( error.response.data?.validationError?.message ||
            err.response.data?.message ||
            `Не удалось востановить пароль`, {
            type: `error`
          });
        }
      }
    }


  return (
    <>
      {showForgotPassMl &&
      <Modal onClose={onModalClose} contentStyles={styles.m_content} containerStyles={styles.m_container}>
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
            />
          </form>
        </div>
        <ToastContainer/>
      </Modal>
      }
      {
        showGetEmailCodeMl && <GetEmailCode onModalClose={onModalClose}/>
      }
    </>
  )
}
