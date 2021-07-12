// hooks and helpers
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation'
import i18n from '/i18n.json'
// componetns
import Link from 'next/link'
// styles 
import styles from './LanguageDrop.module.scss'

export function LanguageDrop({ onClose }) {

    useEffect(() => {
        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
        }
    }, [])

    const
        node = useRef(),
        router = useRouter(),
        { locales } = i18n,
        // translation consfigs
        { t, lang } = useTranslation('common'),
        translationPath = 'header.lang-name.',
        translate = key => t(`${translationPath}${key}`),

        handleClose = (e) => {
            if (node.current.contains(e.target) ){
                if(e.target.parentNode) return
            }
            onClose()
        }



    return (
        <div
            className={styles.container}
            ref={node}
        >
            {
                locales.map(el => {
                    {
                        if (el === lang) return null
                    }
                    return (
                        <Link
                            href={`${router.pathname}`}
                            locale={el}
                            key={`change-lang-${el}`}>
                            <div>
                                <span>
                                    {
                                        translate(`${el}`)
                                    }
                                </span>
                                <img src="" alt="" />
                            </div>
                        </Link>
                    )

                })
            }
        </div>
    )

}
