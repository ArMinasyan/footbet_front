import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'

export default function Main({ children }) {
    return (
        <>
            <Header mainsPages={false} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
