// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// styles
import styles from './LeaveComment.module.scss'
// icons
import filledStar from '/public/images/main/feedbacks/filledStar.png'
import unfilledStar from '/public/images/main/feedbacks/unfilledStar.png'



export function LeaveComment() {

    const
        // states consts
        stars = [0, 1, 2, 3, 4],
        [simulator, setSimulator] = useState(0),
        // translation consfigs
        { t } = useTranslation('common'),
        translationPath = 'commons.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
        schema = yup.object().shape({
            comment: yup
                .string()
        }),
        // form configs
        { register, handleSubmit, formState: { errors } } = useForm({
            mode: 'onChange',
            resolver: yupResolver(schema)
        }),
        submit = (data) => console.log(data, { rate: simulator })

    return (
        <div className={styles.container}>
            <div className={styles.stars_container}>
                <div className={styles.stars_content}>
                    <div className={styles.stars_area}>
                        {
                            stars.map(el =>
                                simulator > el ?
                                    (<img
                                        key={(el + 1) * Math.random()}
                                        src={filledStar.src}
                                        alt=""
                                        onClick={() => setSimulator(el)}
                                    />)
                                    :
                                    (<img
                                        key={(el + 1) * Math.random()}
                                        src={unfilledStar.src}
                                        alt=""
                                        onClick={() => setSimulator(el + 1)}
                                    />))
                        }
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <div className={styles.textarea_container}>
                    <textarea
                        {...register('comment')}
                        id='comment'
                        cols="30"
                        rows="7"
                        placeholder={translate('placeHolder')}
                    ></textarea>
                </div>
                <div className={styles.button_container}>
                    <button>
                        {
                            translate('send')
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}
