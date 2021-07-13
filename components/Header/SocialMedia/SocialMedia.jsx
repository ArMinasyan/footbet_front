// styles
import styles from './SocialMedia.module.scss'
// components
import { Icon } from './Icon/Icon'
import { useState } from 'react'
import { Phone } from './Modals/Phone/Phone'
import { Facebook } from './Modals/Facebook/Facebook'
import { Telegram } from './Modals/Telegram/Telegram'
import { WatsUp } from './Modals/WatsUp/WatsUp'
import { Instagram } from './Modals/Instagram/Instagram'
import { Viber } from './Modals/Viber/Viber'
// icons
import phone from '/public/images/header/SocialMedia/phone.svg'
import facebook from '/public/images/header/SocialMedia/facebook.svg'
import telegram from '/public/images/header/SocialMedia/telegram.svg'
import watsup from '/public/images/header/SocialMedia/watsup.svg'
import instagram from '/public/images/header/SocialMedia/instagram.svg'
import viber from '/public/images/header/SocialMedia/viber.svg'


export function SocialMedia() {

    const
        // states
        [showPhoneModal, setShowPhoneModal] = useState(false),
        [showFacbookModal, setShowFacbookModal] = useState(false),
        [showTelegramModal, setShowTelegramModal] = useState(false),
        [showWatsUpModal, setShowWatsUpModal] = useState(false),
        [showInstagramModal, setShowInstagramModal] = useState(false),
        [showViberModal, setShowViberModal] = useState(false),
        // config
        icons = [
            {
                key: Math.random(),
                src: phone.src,
                click: () => setShowPhoneModal(true),
            },
            {
                key: Math.random(),
                src: facebook.src,
                click: () => setShowFacbookModal(true),
            },
            {
                key: Math.random(),
                src: telegram.src,
                click: () => setShowTelegramModal(true),
            },
            {
                key: Math.random(),
                src: watsup.src,
                click: () => setShowWatsUpModal(true),
            },
            {
                key: Math.random(),
                src: instagram.src,
                click: () => setShowInstagramModal(true),
            },
            {
                key: Math.random(),
                src: viber.src,
                click: () => setShowViberModal(true),
            },
        ],
        modal_contents = {
            phone: {
                text: "+34 672 314 808"
            },
            facebook: {
                text: "Facbook"
            },
            telegram: {
                text: "+34 672 314 808"
            },
            watsup: {
                text: "+34 672 314 808"
            },
            instagram: {
                text: "Instagram"
            },
            viber: {
                text: "+34 672 314 808"
            }
        }

    return (
        <>
            <div className={styles.container}>
                {
                    icons.map(el => (
                        <Icon
                            key={el.key}
                            src={el.src}
                            click={el.click}
                        />
                    ))
                }
            </div>
            {showPhoneModal && <Phone onModalClose={() => setShowPhoneModal(false)} text={modal_contents.phone.text} />}
            {showFacbookModal && <Facebook onModalClose={() => setShowFacbookModal(false)} text={modal_contents.facebook.text} />}
            {showTelegramModal && <Telegram onModalClose={() => setShowTelegramModal(false)} text={modal_contents.telegram.text} />}
            {showWatsUpModal && <WatsUp onModalClose={() => setShowWatsUpModal(false)} text={modal_contents.watsup.text} />}
            {showInstagramModal && <Instagram onModalClose={() => setShowInstagramModal(false)} text={modal_contents.instagram.text} />}
            {showViberModal && <Viber onModalClose={() => setShowViberModal(false)} text={modal_contents.viber.text} />}
        </>
    )
}
