// hooks and helpers
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
// styles
import styles from "./NavBar.module.scss";
// translation
import useTranslation from "next-translate/useTranslation";
// componetns
import { Button } from "./Button/Button";
import ContactsModal from "../../Pages/Contacts/ContactsModal";

export function NavBar() {
  const //states
    [showContactsModal, setShowContactsModal] = useState(false),
    { t } = useTranslation("common"),
    translationPath = "header.navBar.",
    translate = (key) => t(`${translationPath}${key}`),
    // router
    router = useRouter(),
    // nav bar buttons configs
    buttonsInHomePage = [
      {
        id: "main",
        key: Math.random(),
        frstContent: translate("main"),
        href: "/",
      },
      {
        id: "games",
        key: Math.random(),
        frstContent: translate("games.frs"),
        secContent: translate("games.sec"),
        href: "/games",
      },
      {
        id: "statistics",
        key: Math.random(),
        frstContent: translate("statistics.frs"),
        secContent: translate("statistics.sec"),
        href: "/statistics",
      },
      {
        id: "prediction",
        key: Math.random(),
        frstContent: translate("prediction.frs"),
        secContent: translate("prediction.sec"),
        href: "/prediction",
      },
      {
        id: "testimonials",
        key: Math.random(),
        frstContent: translate("testimonials"),
        href: "/testimonials",
      },
      {
        id: "aboutUs",
        key: Math.random(),
        frstContent: translate("aboutUs"),
        href: "/aboutUs",
      },
      {
        id: "contacts",
        key: Math.random(),
        frstContent: translate("contacts"),
        href: null,
        click: () => setShowContactsModal(true),
      },
    ],
    buttons = buttonsInHomePage.filter((el) => el.id !== "statistics");

  return (
    <>
      <div
        className={`${styles.container} ${
          router.pathname !== "/" ? styles.tablet : null
        }`}
      >
        <div className={styles.content}>
          <div className={styles.top_on_tablet}>
            {(router.pathname === "/" ? buttonsInHomePage : buttons).map(
              (el, i) =>
                i < 3 && (
                  <Button
                    contentFrstP={el.frstContent}
                    contentSecP={el.secContent}
                    href={el.href}
                    key={el.key}
                    active={router.pathname === el.href ? "true" : null}
                    click={el.click && el.click}
                  />
                )
            )}
          </div>
          <div className={styles.bottom_on_tablet}>
            {(router.pathname === "/" ? buttonsInHomePage : buttons).map(
              (el, i) =>
                i >= 3 && (
                  <Button
                    contentFrstP={el.frstContent}
                    contentSecP={el.secContent}
                    href={el.href}
                    key={el.key}
                    active={router.pathname === el.href ? "true" : null}
                    click={el.click && el.click}
                  />
                )
            )}
          </div>
        </div>
      </div>
      {showContactsModal && (
        <ContactsModal
          opened={showContactsModal ? true : false}
          onModalClose={() => setShowContactsModal(false)}
        />
      )}
    </>
  );
}
