// components
import { InputConteiner } from './InputConteiner/InputConteiner'
// styles
import styles from './Form.module.scss'
// icons 
import userIcon from '/public/images/register/user-input.svg'


export function Form({ title }) {

    const inputs = [
        {
            label: userIcon,
            id: 'name',
            type: 'text',
            placeholder: 'Имя пользователя',
            other: '',
        }
    ]

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
                {
                    inputs.map(el => (
                        <InputConteiner
                            label={el.label}
                            id={el.id}
                            type={el.type}
                            placeholder={el.placeholder}
                            other={el.other}
                        />
                    ))
                }
            </form>
        </div>
    )
}
