// hooks and helpers
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react';


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
    const
        [showDropdown, setShowDropdown] = useState(false),
        [showContactsModal, setShowContactsModal] = useState(false),
        { t } = useTranslation('common'),
        translationPath = 'header.navBar.',
        router = useRouter(),
        translate = (key) => t(`${translationPath}${key}`),
        buttonsInHomePage = [
            {
                key: Math.random(),
                frstContent: translate('main'),
                href: '/'
            },
            {
                key: Math.random(),
                frstContent: translate('games'),
                href: '/games'
            },
            {
                key: Math.random(),
                frstContent: translate('statistics.frs'),
                secContent: translate('statistics.sec'),
                href: '/statistics'
            },
            {
                key: Math.random(),
                frstContent: translate('prediction.frs'),
                secContent: translate('prediction.sec'),
                href: '/prediction'
            },
            {
                key: Math.random(),
                frstContent: translate('testimonials'),
                href: '/testimonials'
            },
            {
                key: Math.random(),
                frstContent: translate('aboutUs'),
                href: '/aboutUs'
            },
            {
                key: Math.random(),
                frstContent: translate('contacts'),
                href: null,
                click: () => setShowContactsModal(true)
            },
        ],
        buttons = [
            {
                key: Math.random(),
                frstContent: translate('main'),
                href: '/'
            },
            {
                key: Math.random(),
                frstContent: translate('games'),
                href: '/games'
            },
            {
                key: Math.random(),
                frstContent: translate('prediction.frs'),
                secContent: translate('prediction.sec'),
                href: '/prediction'
            },
            {
                key: Math.random(),
                frstContent: translate('testimonials'),
                href: '/testimonials'
            },
            {
                key: Math.random(),
                frstContent: translate('aboutUs'),
                href: '/aboutUs'
            },
            {
                key: Math.random(),
                frstContent: translate('contacts'),
                href: null,
                click: () => setShowContactsModal(true)
            },
        ]
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_check}>
                <img src={dropdownLines.src} alt="drop-check-icon" onClick={() => setShowDropdown(!showDropdown)} />
            </div>
            {showDropdown && (
                <div className={styles.dropdown_menu}>
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