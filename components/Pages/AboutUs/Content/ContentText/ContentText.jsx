import { content_text } from "./content_text";

export function ContentText() {
    return (
        <div>
            <div>
                <p>

                </p>
            </div>
            <div>
                {
                    content_text.map(el => (
                        <div>
                            <p>{el.title}</p>
                            <p>{el.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
