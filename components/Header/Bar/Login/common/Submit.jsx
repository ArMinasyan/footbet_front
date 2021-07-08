export function Submit({ styles, content, click }) {
    return (
        <div className={styles}>
            <button type='submit'>
                {
                    content
                }
            </button>
        </div>
    )
}
