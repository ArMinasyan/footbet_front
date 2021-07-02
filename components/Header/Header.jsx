import Link from 'next/link'

export function Header() {
    return (
        <div>
            <Link href="/registration">
                <button>Register</button>
            </Link>
        </div>
    )
}
