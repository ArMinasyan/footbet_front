import styles from './Header.module.scss'
// componetns 
import { Title } from '../../../common/Title/Title';
import { Button } from '../../../common/Button/Button';
import { useRouter } from 'next/dist/client/router';

export function Header({
    buttonsActivity,
    on_TM_click,
    on_GM_click,
    gameRulesState }) {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <Title
                page={'home'}
                locationInPage={'matches'}
                textPathName={'.title'}
                href='/matches'
                classes={styles.title}
            />
            <div className={styles.buttons}
                style={
                    router.pathname === '/matches' ?
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        } : null}>
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
