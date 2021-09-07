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
import { request } from '../../../../../lib/er.lib'
import { ADD_FEEDBACK } from '../../../../../lib/request-destinations'
import { toast, ToastContainer } from 'react-toastify'
import LoadingButton from '../../../../common/LoadingButton'
import { useRef } from 'react'



export function LeaveComment( { matchId } ) {

  const [ loading, setLoading ] = useState(false);
  const commentBoxRef = useRef(null);
    const
        // states consts
        stars = [0, 1, 2, 3, 4],
        [simulator, setSimulator] = useState(1),
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
        });
        
    const submit = async (data) => {
      console.log( data, matchId );
      if ( matchId ) {
        try {
          setLoading(true);
          await request(ADD_FEEDBACK, { comment: data.comment, stars: simulator, matchId }, {auth: true});
          if ( commentBoxRef.current ) 
            commentBoxRef.current.value = "";
        }
        catch ( err ) {
          toast( err.response.data?.message || `Невозможно добавить отзыв`, {
              type: `error`
          });
        }
        finally{
          setLoading(false);
        }
      }
    }

    if ( !matchId )
      return <></>;

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
                        ref={commentBoxRef}
                        placeholder={translate('placeHolder')}
                    ></textarea>
                </div>
                <div className={styles.button_container}>
                    <LoadingButton loading={loading}>
                        {
                          translate('send')
                        }
                    </LoadingButton>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
