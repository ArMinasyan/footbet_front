// hooks
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
// styles
import styles from './Pending.module.scss'
// icon 
import pending from '/public/images/payments/pending.png'

export function Pending() {

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
                            <p>{translate('panding')}</p>
                            <img src={pending.src} alt="" />
                        </div>
                    </div>
                </Modal>
                :
                <div className={styles.container}>
                    <div className={styles.content}>
                        <p>{translate('panding')}</p>
                        <img src={pending.src} alt="" />
                    </div>
                </div>
            }
        </>

    )
}
