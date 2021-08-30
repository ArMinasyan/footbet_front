import styles from './Icon.module.scss'
import Link from 'next/link'

export function Icon({
    src,
    click = null,
    lastElement = false,
    elements,
    otherStyles = null,
    classes,
    url = "" }) {
    return (
        <div
            style={elements ? { width: `${100 / elements}%` } : { padding: '0 15px' }}
            className={`${styles.container} ${lastElement ? styles.last_element : ""} ${classes}`}>
            <Link href={url} target="_blank">
                <a target="_blank">
                    <img
                        src={src}
                        alt={`icons-${src}`}
                        onClick={click}
                        style={otherStyles}
                    />
                </a>
            </Link>
        </div >
    )
}
