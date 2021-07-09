import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'

export default function Main({ children }) {
    return (
        <>
            <Header mainsPages={true} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
