// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { inputs } from './input_configs'
//components
import { Title } from '../../common/Title'
import { Submit } from '../../common/Submit'
import { Modal } from '../../../../../common/auth/Modal/Modal'
import { NewPassword } from '../NewPassword/NewPassword'
// styles
import styles from './GetEmailCode.module.scss'

import { request, getCookie } from '/lib/er.lib';

import { ToastContainer, toast } from 'react-toastify';
import { START_RESET_PASSWORD, VERIFY_PASSWORD_RESET } from '../../../../../../lib/request-destinations'


export function GetEmailCode({ onModalClose }) {

  const
    // modal states pass => password Ml => Modal
    [showGetEmailCodeMl, setShowEmailCodeMl] = useState(true),
    [showNewPasswordMl, setShowNewPasswordMl] = useState(false),
    // translation consfigs
    { t } = useTranslation('common'),
    translationPath = 'header.getEmailCodeModal.',
    translate = key => t(`${translationPath}${key}`),
    // yup configs
    schema = yup.object().shape({
      num1: yup.string().required().matches(/[0-9]/mg),
      num2: yup.string().required().matches(/[0-9]/mg),
      num3: yup.string().required().matches(/[0-9]/mg),
      num4: yup.string().required().matches(/[0-9]/mg),
      num5: yup.string().required().matches(/[0-9]/mg),
      num6: yup.string().required().matches(/[0-9]/mg),
    }),
    // form configs
    { register, handleSubmit, formState: { errors } } = useForm({
      mode: 'onChange',
      resolver: yupResolver(schema)
    }),
    // input jumps
    jump = (x) => {
      if (x.value.length) {
        x = x.nextSibling;
        if (x && /text/.test(x.type)) {
          x.focus();
        }
      }
    },
    jumpBack = (x) => {
      if (x.target.value.length == 0) {
        if (x.code === 'Backspace') {
          if (document.querySelector(".move:focus").previousSibling) {
            document.querySelector(".move:focus").previousSibling.focus();
          }
        }
      }
    },
    // on form submit
    submit = async (data) => {
      try {
        data = Object.values(data).reduce((ac, el) => ac + el)
        await request(VERIFY_PASSWORD_RESET, { code: data }, {
          headers: {
            'Authorization': `Bearer ${getCookie(`reset-token`)}`
          }
        })
        setShowEmailCodeMl(false)
        setShowNewPasswordMl(true)
      } catch (err) {
        // toast( err.response.data?.message || `Не удалось востановить пароль`, {
        //     type: `error`
        // });
        if (!error.response.data.success) {
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
      {showGetEmailCodeMl &&
      < Modal onClose={onModalClose} contentStyles={styles.m_content} containerStyles={styles.m_container}>
        <div className={styles.container}>
          <Title
            styles={styles.title}
            content={translate('title')}
          />
          <form onSubmit={handleSubmit(submit)}>
            <Title
              styles={styles.description}
              content={translate('description')}
            />
            <div className={styles.inputs}>
              {
                inputs.map((el, i) => (
                  <input
                    id={el.id}
                    className={
                      `${el.class} 
                                                ${
                        errors.num1 ||
                        errors.num2 ||
                        errors.num3 ||
                        errors.num4 ||
                        errors.num5 ||
                        errors.num6 ? styles.error_input : styles.success_input
                      }`.trim()}
                    type={el.type}
                    key={el.key}
                    maxLength={el.maxLength}
                    onInput={e => jump(e.target)}
                    onKeyDown={e => jumpBack(e)}
                    {...register('num' + (i + 1))}
                  />
                ))
              }
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
        showNewPasswordMl && <NewPassword onModalClose={onModalClose}/>
      }
    </>

  )
}
