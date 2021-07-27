import styles from './Icon.module.scss'

export function Icon({
    src,
    click = null,
    lastElement = false,
    elements,
    otherStyles = null,
    classes }) {
    return (
        <div
            style={elements ? { width: `${100 / elements}%` } : { padding: '0 8px' }}
            className={`${styles.container} ${lastElement ? styles.last_element : ""} ${classes}`}>
            <img
                src={src}
                alt={`icons-${src}`}
                onClick={click}
                style={otherStyles}
            />
        </div >
    )
}
