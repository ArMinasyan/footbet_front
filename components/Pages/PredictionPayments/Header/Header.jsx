// components
import { Bar } from './Bar/Bar'


export function Header({
    predClick,
    paymClick,
    predActive,
    paymActive
}) {
    return (
        <>
            <Bar
                predClick={predClick}
                paymClick={paymClick}
                predActive={predActive}
                paymActive={paymActive}
            />
        </>
    )
}
