// hooks and helpers
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef } from 'react';
// componetns
import Link from 'next/link'
// styles 
import styles from './LanguageDrop.module.scss'

export function LanguageDrop({ onClose, click, data }) {

    useEffect(() => {
        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
        }
    }, [])

    const
        node = useRef(),
        router = useRouter(),

        handleClose = (e) => {
            if (node.current.contains(e.target)) {
                if (e.target.parentNode) return
            }
            onClose()
        }


    return (
        <div
            className={styles.container}
            ref={node}
        >
            <div className={styles.content}>
                {
                    data.map(el => {
                        return (
                            <Link
                                href={`${router.pathname}`}
                                locale={el.lang}
                                key={`change-lang-${el.lang}`}>
                                <div className={styles.row}>
                                    <span
                                        onClick={click}
                                        className={`${el.lang}`}
                                    >
                                        {
                                            el.contentOnDrop
                                        }
                                    </span>
                                    <img
                                        onClick={click}
                                        src={el.icon}
                                        className={`${el.lang}`}
                                    />
                                </div>
                            </Link>
                        )

                    })
                }
            </div>
        </div>
    )

}
