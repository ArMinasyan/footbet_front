//components
import { InputConteiner } from './InputConteiner/InputConteiner'
// styles
import styles from './Form.module.scss'

export function Form({ title }) {
    return (
        <div className={styles.conteiner}>
            <div>
                <h1>
                    {
                        title
                    }
                </h1>
            </div>
            <form action="">
                <InputConteiner />
            </form>
        </div>
    )
}
