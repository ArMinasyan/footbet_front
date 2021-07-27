import { Header } from '../components/Header/Header'

export default function RegisterLayout({ children }) {
    return (
        <>
            <Header mainsPages={false}/>
            <main>
                {children}
            </main>
        </>
    )
}
