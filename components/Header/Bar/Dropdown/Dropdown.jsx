// hooks and helpers
import { useRouter } from 'next/dist/client/router'
import { useEffect, useRef, useState } from 'react';


// styles
import styles from './Dropdown.module.scss';

// translation 
import useTranslation from 'next-translate/useTranslation'

//imgs
import dropdownLines from '/public/images/header/dropdown_lines.png';

//components
import Link from 'next/link'
import ContactsModal from '../../../Pages/Contacts/ContactsModal';


export default function Dropdown() {
    useEffect(() => {
        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
        }
    }, [])

    const
        [showDropdown, setShowDropdown] = useState(false),
        [showContactsModal, setShowContactsModal] = useState(false),

        { t } = useTranslation('common'),
        translationPath = 'header.navBar.',
        translate = (key) => t(`${translationPath}${key}`),

        router = useRouter(),

        node = useRef(),

        handleClose = (e) => {
            if (node?.current?.contains(e.target)) {
                if (e.target.parentNode) return
            }
            setShowDropdown(false)
        },

        buttonsInHomePage = [
            {
                id: 'main',
                key: Math.random(),
                frstContent: translate('main'),
                href: '/'
            },
            {
                id: 'games',
                key: Math.random(),
                frstContent: translate('games'),
                href: '/games'
            },
            {
                id: 'statistics',
                key: Math.random(),
                frstContent: translate('statistics.frs'),
                secContent: translate('statistics.sec'),
                href: '/statistics'
            },
            {
                id: 'prediction',
                key: Math.random(),
                frstContent: translate('prediction.frs'),
                secContent: translate('prediction.sec'),
                href: '/prediction'
            },
            {
                id: 'testimonials',
                key: Math.random(),
                frstContent: translate('testimonials'),
                href: '/testimonials'
            },
            {
                id: 'aboutUs',
                key: Math.random(),
                frstContent: translate('aboutUs'),
                href: '/aboutUs'
            },
            {
                id: 'contacts',
                key: Math.random(),
                frstContent: translate('contacts'),
                href: null,
                click: () => {
                    setShowDropdown(false)
                    setShowContactsModal(true)
                }
            },
        ],
        buttons = buttonsInHomePage.filter(el => el.id !== "statistics")


    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_check}>
                <img src={dropdownLines.src} alt="drop-check-icon" onClick={() => setShowDropdown(!showDropdown)} />
            </div>
            {showDropdown && (
                <div className={styles.dropdown_menu} ref={node}>
                    <ul className={styles.dropdown_list}>
                        {
                            (router.pathname === '/' ? buttonsInHomePage : buttons).map(el => (
                                <Link
                                    href={el.href ? el.href : ""}
                                    key={el.key}>
                                    <li
                                        onClick={el.click && el.click}
                                        className={styles.dropdown_list_items}
                                    >
                                        {el.frstContent} {el.secContent}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            )}
            {showContactsModal &&
                <ContactsModal
                    opened={showContactsModal ? true : false}
                    onModalClose={() => setShowContactsModal(false)}
                />
            }
        </div>
    )
}