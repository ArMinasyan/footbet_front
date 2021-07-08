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
// styles
import styles from './GetEmailCode.module.scss'

export function GetEmailCode({ onModalClose }) {

    const
        // modal states pass => password Ml => Modal
        [showGetEmailCodeMl, setShowEmailCodeMl] = useState(true),
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
        submit = (data) => console.log(data)

    return (
        <>
            {showGetEmailCodeMl &&
                < Modal onClose={onModalClose} >
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
                                            className={el.class}
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
                </Modal >
            }
        </>

    )
}
