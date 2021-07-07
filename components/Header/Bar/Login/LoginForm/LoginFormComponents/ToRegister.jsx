import Link from 'next/link'

export function ToRegister({
    container_styles,
    content_styles,
    or,
    register_text_styles,
    content,
    href,
    click }) {
    return (
        <div
            className={container_styles}
            onClick={click}>
            <div className={content_styles}>
                <span>
                    {
                        or + " "
                    }
                </span>
                <Link href={href}>
                    <span className={register_text_styles}>
                        {
                            content
                        }
                    </span>
                </Link>
            </div>
        </div >
    )
}
