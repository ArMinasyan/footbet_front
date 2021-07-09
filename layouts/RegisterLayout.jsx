import { Header } from '../components/Header/Header'
import { Footer } from '../components/Registration/Footer/Footer'

export default function RegisterLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
