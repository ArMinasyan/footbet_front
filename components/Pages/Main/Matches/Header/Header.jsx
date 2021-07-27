import styles from './Header.module.scss'
// componetns 
import { Title } from '../../../common/Title/Title';
import { Button } from '../../../common/Button/Button';

export function Header({
    buttonsActivity,
    on_TM_click,
    on_GM_click,
    gameRulesState }) {
    return (
        <div className={styles.container}>
            <Title
                page={'home'}
                locationInPage={'matches'}
                textPathName={'.title'}
                href='/matches'
                classes={styles.title}
            />
            <div className={styles.buttons}>
                <Button
                    page='home'
                    locationInPage={'matches'}
                    textPathName={'.buttons.TodayMatches'}
                    active={buttonsActivity}
                    click={on_TM_click}
                />
                {gameRulesState &&
                    <Button
                        page='home'
                        locationInPage={'matches'}
                        textPathName={'.buttons.GameRules'}
                        active={!buttonsActivity}
                        click={on_GM_click}
                    />
                }
            </div>
        </div>
    )
}
