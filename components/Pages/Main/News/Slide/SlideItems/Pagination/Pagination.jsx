import styles from './Pagination.module.scss'

export function Pagination({ pages, activePage, onClick }) {
    return (
        <div
            className={styles.container}
        >
            {
                pages.map(el => {
                    const isActivePage = activePage === el
                    return (
                        <div
                            key={el}
                            onClick={() => onClick(el)}
                            active={isActivePage}
                            className={`${styles.round} ${isActivePage && styles.active}`}
                        />
                    )
                })
            }
        </div>
    )
}
