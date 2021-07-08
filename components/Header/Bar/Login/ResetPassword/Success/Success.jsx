// hooks helpers
import useTranslation from 'next-translate/useTranslation'
// components
import { Modal } from '../../../../../common/auth/Modal/Modal'
import { Title } from '../../common/Title'
// styles
import styles from './Success.module.scss'
// icons
import successIcon from '/public/images/header/login/success.png'

export function Success({ onModalClose }) {

    const
        // translation    
        { t } = useTranslation('common'),
        translationPath = 'header.successModal.',
        translate = key => t(`${translationPath}${key}`)

    return (
        <Modal onClose={onModalClose}>
            <div className={styles.container}>
                <Title
                    styles={styles.title}
                    content={translate('title')}
                />
                <div className={styles.icon_container}>
                    <img
                        src={successIcon.src}
                        alt='Success img'
                    />
                </div>
            </div>
        </Modal>
    )
}
