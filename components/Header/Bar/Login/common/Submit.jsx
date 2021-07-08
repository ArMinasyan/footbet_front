export function Submit({ styles, content, click }) {
    return (
        <div className={styles}>
            <button onClick={click}>
                {
                    content
                }
            </button>
        </div>
    )
}
