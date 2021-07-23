import { useRouter } from "next/dist/client/router"

export function PaymentTab() {

    const router = useRouter()

    return (
        <div>
            {router.query.game}
        </div>
    )
}
