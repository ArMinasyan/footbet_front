// hooks
import { useState } from 'react'
// styles
import styles from './FileInput.module.scss'
// icons 
import plusIcon from '/public/images/register/plus.svg'


export function FileInput() {

    const
        // for img input
        [imgInput, setImgInput] = useState('')

    return (
        <div className={styles.uploadImageConteiner}>
            <label htmlFor="file">
                <div className={styles.uploadImageContent}>
                    {imgInput ?
                        <span>{imgInput.name}</span>
                        :
                        <img src={plusIcon.src} />
                    }
                    <input
                        type='file'
                        id='file'
                        style={{ display: 'none' }}
                        onChange={e => setImgInput(e.target.files[0])}
                    />
                </div>
            </label>
        </div>
    )
}
