import styles from './Header.module.scss'
// componetns 
import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';

export function Header({
    buttonsActivity,
    on_TM_click,
    on_GM_click }) {
    return (
        <div className={styles.container}>
            <Title
                locationInMainPage={'matches'}
                textPathName={'.title'}
            />
            <div className={styles.buttons}>
                <Button
                    locationInMainPage={'matches'}
                    textPathName={'.buttons.TodayMatches'}
                    active={buttonsActivity ? true : false}
                    click={on_TM_click}
                />
                <Button
                    locationInMainPage={'matches'}
                    textPathName={'.buttons.GameRules'}
                    active={!buttonsActivity ? true : false}
                    click={on_GM_click}
                />
            </div>
        </div>
    )
}
