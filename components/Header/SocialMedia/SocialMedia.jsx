import { useRef } from "react";
// styles
import styles from "./SocialMedia.module.scss";
// components
import { Icon } from "./Icon/Icon";
import { useState } from "react";
import { Phone } from "./Modals/Phone/Phone";
import { Facebook } from "./Modals/Facebook/Facebook";
import { Telegram } from "./Modals/Telegram/Telegram";
import { WatsUp } from "./Modals/WatsUp/WatsUp";
import { Instagram } from "./Modals/Instagram/Instagram";
import { Viber } from "./Modals/Viber/Viber";
// icons
import phone from "/public/images/header/SocialMedia/phone.svg";
import facebook from "/public/images/header/SocialMedia/facebook.svg";
import telegram from "/public/images/header/SocialMedia/telegram.svg";
import watsup from "/public/images/header/SocialMedia/watsup.svg";
import instagram from "/public/images/header/SocialMedia/instagram.svg";
import viber from "/public/images/header/SocialMedia/viber.svg";

export function SocialMedia() {
  const // states
    [showPhoneModal, setShowPhoneModal] = useState(false),
    [showFacbookModal, setShowFacbookModal] = useState(false),
    [showTelegramModal, setShowTelegramModal] = useState(false),
    [showWatsUpModal, setShowWatsUpModal] = useState(false),
    [showInstagramModal, setShowInstagramModal] = useState(false),
    [showViberModal, setShowViberModal] = useState(false),
    socialMediasRef = useRef(),
    // config
    icons = [
      {
        id: "phone",
        key: Math.random(),
        src: phone.src,
        click: () => {
          window.scrollTo(0, 0);
          setShowPhoneModal(true);
        },
      },
      {
        id: "facebook",
        key: Math.random(),
        src: facebook.src,
        click: () => {
          window.scrollTo(0, 0);
          setShowFacbookModal(true);
        },
      },
      {
        id: "telegram",
        key: Math.random(),
        src: telegram.src,
        click: () => {
          window.scrollTo(0, 0);
          setShowTelegramModal(true);
        },
      },
      {
        id: "watsup",
        key: Math.random(),
        src: watsup.src,
        click: () => {
          window.scrollTo(0, 0);
          setShowWatsUpModal(true);
        },
      },
      {
        id: "instagram",
        key: Math.random(),
        src: instagram.src,
        click: () => {
          window.scrollTo(0, 0);
          setShowInstagramModal(true);
        },
      },
      {
        id: "viber",
        key: Math.random(),
        src: viber.src,
        click: () => {
          window.scrollTo(0, 0);
          setShowViberModal(true);
        },
      },
    ],
    modal_contents = {
      phone: {
        text: "+34 672 314 808",
<<<<<<< HEAD
        url: "tel:+37498645457",
=======
        url: "tel:+34672314808",
>>>>>>> cccec65b2fd3ec30be17ec050f7ce1ed3c9a165c
      },
      facebook: {
        text: "Facebook",
        url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/",
      },
      telegram: {
        text: "+34 672 314 808",
        url: "https://telegram.me/footbet24com",
      },
      watsup: {
        text: "+34 672 314 808",
<<<<<<< HEAD
        url: "https://api.whatsapp.com/send?phone=+37498645457",
=======
        url: "https://api.whatsapp.com/send?phone=+34672314808",
>>>>>>> cccec65b2fd3ec30be17ec050f7ce1ed3c9a165c
      },
      instagram: {
        text: "Instagram",
        url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link",
      },
      viber: {
        text: "+34 672 314 808",
<<<<<<< HEAD
        url: "viber://chat?number=+37498645457",
=======
        url: "viber://chat?number=+34672314808",
>>>>>>> cccec65b2fd3ec30be17ec050f7ce1ed3c9a165c
      },
    };
  return (
    <>
      <div className={styles.container} ref={socialMediasRef}>
        {icons.map((el) => (
          <Icon id={el.id} key={el.key} src={el.src} click={el.click} />
        ))}
      </div>
      {showPhoneModal && (
        <Phone
          onModalClose={() => setShowPhoneModal(false)}
          data={modal_contents.phone}
          parent={socialMediasRef}
        />
      )}
      {showFacbookModal && (
        <Facebook
          onModalClose={() => setShowFacbookModal(false)}
          data={modal_contents.facebook}
          parent={socialMediasRef}
        />
      )}
      {showTelegramModal && (
        <Telegram
          onModalClose={() => setShowTelegramModal(false)}
          data={modal_contents.telegram}
          parent={socialMediasRef}
        />
      )}
      {showWatsUpModal && (
        <WatsUp
          onModalClose={() => setShowWatsUpModal(false)}
          data={modal_contents.watsup}
          parent={socialMediasRef}
        />
      )}
      {showInstagramModal && (
        <Instagram
          onModalClose={() => setShowInstagramModal(false)}
          data={modal_contents.instagram}
          parent={socialMediasRef}
        />
      )}
      {showViberModal && (
        <Viber
          onModalClose={() => setShowViberModal(false)}
          data={modal_contents.viber}
          parent={socialMediasRef}
        />
      )}
    </>
  );
}
