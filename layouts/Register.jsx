import { Header } from '../components/Header/Header'
import { Footer } from '../components/Registration/Footer/Footer'

export default function RegisterLayout({ children }) {
    return (
        <>
            <Header mainsPages={false}/>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
