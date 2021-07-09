import { Header } from '../components/Header/Header'

export default function RegisterLayout({ children }) {
    return (
        <>
            <>
                <Header />
            </>
            <main>
                {children}
            </main>
        </>
    )
}
