
export function ResetPasswordLink({ styles, content, click }) {
    return (
        <div className={styles} >
            <span onClick={click}>
                {
                    content
                }
            </span>
        </div>
    )
}
