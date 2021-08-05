import { content_text } from "./content_text";
// styles 
import styles from './ContentText.module.scss'

const justifyBetween = {
    display: `flex`,
    'justify-content': `space-between`
}

export function ContentText() {
    return (
        <div className={styles.conatiner}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p>
                        {content_text.title}
                    </p>
                </div>
                <div className={styles.paragraphs_container}>
                    <div className={styles.paragraph}>
                        <p className={styles.paragraph_text}>
                            Норик Хачатрян Лорикович <br /> <br />
                            Мы в игровой индустрии уже 15 лет! <br />
                            За это время работы в этой сфере появились много клиентов, и мы решили сделать покупку прогнозов более удобным. <br />
                            Платные прогнозы на футбол в первую очередь рассчитаны для тех людей, которые хотят получить дополнительный доход от ставок на футбол. Главная цель прибавлять Ваш доход. Для этого нужно прислушиваться к рекомендациям и играть по правилам!!! Это самое важное!!! <br />
                            Мы рады работать, улучшать и создавать для вас лучшую игровую платформу. Мы полностью открыты, чтобы выслушать и принять любое мнение, предложение и здоровую критику, которые приведут нас к лучшим результатам. Добро пожаловать на footbet24.com <br />
                        </p>
                        <br />
                        <p className={styles.paragraph_text}>
                                
                            Как можно связаться с нами:<br />
                            Номер телефона /whatsapp, viber/:  	+34 672 314 808 
                            <br />
                            <br />
                            <p style={justifyBetween}><span>электронная почта: </span><span>n.xach1987@mail.ru</span></p>
                            <p style={justifyBetween}><span>ИНН: </span><span>784809506408</span></p>
                        </p>
                        <br/><br/>
                        <p className={styles.paragraph_text}>
                            Как происходит оплата и покупка и что нужно для этого сделать. <br />
                            Для того чтобы купить игру или прогноз нужно:
                            <ol>
                                <li>Зарегистрироваться на сайте</li>
                                <li>Нажимать на кнопку “купить”</li>
                                <li>Откроется окно для оплаты, набирать данные карты и оплатить </li>
                                <li>После оплаты У Вас откроется прогноз, который Вы оплатили. </li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
