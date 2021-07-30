// hooks
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import { Modal } from '../../../../../../../common/auth/Modal/Modal'
// styles
import styles from './Success.module.scss'
// icon 
import success from '/public/images/payments/success.png'

export function Success() {

    const
        // translation consfigs
        { t } = useTranslation('prediction'),
        translationPath = 'tabs.payments.cardForm.',
        translate = key => t(`${translationPath}${key}`),
        clientWidth = document.querySelector('body').clientWidth,
        [showModal, setShowModal] = useState(true)

    return (
        <>
            {clientWidth < 768 ?
                showModal && <Modal onClose={() => setShowModal(false)}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <p>{translate('thanks')}</p>
                            <img src={success.src} alt="" />
                        </div>
                    </div>
                </Modal>
                :
                <div className={styles.container}>
                    <div className={styles.content}>
                        <p>{translate('thanks')}</p>
                        <img src={success.src} alt="" />
                    </div>
                </div>
            }
        </>
    )
}
