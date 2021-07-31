// hooks and helpers
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
// styles
import styles from './CardForm.module.scss'
// components
import { Success } from '../Success/Success'
import { Pending } from '../Pending/Pending'


export function CardForm() {

    const
        // translation consfigs
        { t } = useTranslation('prediction'),
        translationPath = 'tabs.payments.cardForm.',
        translate = key => t(`${translationPath}${key}`),
        // states
        [showSuccess, setShowSuccess] = useState(false),
        [showPending, setShowPending] = useState(false),
        [showForm, setShowForm] = useState(true),
        // functions
        jump = (x) => {
            if (x.value.length === 4) {
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
        // yup configs
        schema = yup.object().shape({
            fullName: yup.string().required().matches(/(^[A-Z ]*$)/mg),
            CVV: yup.string().min(3).max(3).required(),
            activeUntill: yup.string().required().min(5).max(5).matches(/(^[0-9/]*$)/mg)
        }),
        cardNumberSchema = yup.object().shape({
            Quartet1: yup.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
            Quartet2: yup.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
            Quartet3: yup.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
            Quartet4: yup.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
        }),
        // cardNumbers schema
        margedSchema = schema.concat(cardNumberSchema),
        // form configs
        { register, handleSubmit, formState: { errors } } = useForm({
            mode: 'onChange',
            resolver: yupResolver(margedSchema)
        }),
        submit = data => {
            let
                dataEntries = Object.entries(data),
                cardNumbers = dataEntries.filter(el => el[0].indexOf('Quartet') > -1).reduce((ac, el) => (ac + el[1]), ""),
                transformedData = dataEntries.filter(el => el[0].indexOf('Quartet'))
            transformedData.push(["cardNumber", cardNumbers])
            setShowForm(false)
            setShowSuccess(true)
            console.log(transformedData);
        }
    return (
        <>
            {showForm &&
                <div className={styles.container}>
                    <div className={styles.content}>
                        <form onSubmit={handleSubmit(submit)} autoComplete='off'>
                            <div className={styles.name}>
                                <input
                                    id='fullName'
                                    {...register('fullName')}
                                    type="text"
                                    placeholder={translate('fullName')}
                                    className={errors.fullName ? styles.input_error : styles.input_success}
                                />
                            </div>
                            <div className={styles.card_number_content}>
                                <p>
                                    {translate('cardNumber')}
                                </p>
                                <div className={styles.card_number_inputs}>
                                    <input
                                        id='quartet1'
                                        {...register('Quartet1')}
                                        type="text"
                                        className={`move ${errors.Quartet1 ? styles.input_error : styles.input_success}`}
                                        onInput={e => jump(e.target)}
                                        onKeyDown={e => jumpBack(e)}
                                    />
                                    <input
                                        id="quartet2"
                                        {...register('Quartet2')}
                                        type="text"
                                        className={`move ${errors.Quartet2 ? styles.input_error : styles.input_success}`}
                                        onInput={e => jump(e.target)}
                                        onKeyDown={e => jumpBack(e)}
                                    />
                                    <input
                                        id="quartet3"
                                        {...register('Quartet3')}
                                        type="text"
                                        className={`move ${errors.Quartet3 ? styles.input_error : styles.input_success}`}
                                        onInput={e => jump(e.target)}
                                        onKeyDown={e => jumpBack(e)}
                                    />
                                    <input
                                        id="quartet4"
                                        {...register('Quartet4')}
                                        type="text"
                                        className={`move ${errors.Quartet4 ? styles.input_error : styles.input_success}`}
                                        onInput={e => jump(e.target)}
                                        onKeyDown={e => jumpBack(e)}
                                    />
                                </div>
                            </div>
                            <div className={styles.cvv}>
                                <input
                                    id="CVV"
                                    {...register('CVV')}
                                    type="text"
                                    placeholder={translate('codeCVV')}
                                    className={errors.CVV ? styles.input_error : styles.input_success}
                                />
                            </div>
                            <div className={styles.active_untill}>
                                <input
                                    id="activeUntill"
                                    {...register('activeUntill')}
                                    type="text"
                                    placeholder={translate('activeUntill')}
                                    className={errors.activeUntill ? styles.input_error : styles.input_success}
                                />
                            </div>
                            <div className={styles.success}>
                                <button type='submit'>
                                    {translate('success')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            {showSuccess && <Success />}
            {showPending && <Pending />}
        </>

    )
}
