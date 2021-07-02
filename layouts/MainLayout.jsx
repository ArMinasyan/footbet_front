import { Header } from '../components/Header/Header'

export default function MainLayout({ children }) {
    return (
        <>
            <div>
                <Header />
            </div>
            <main>
                {children}
            </main>
            <div>
                footer
            </div>
        </>
    )
}
