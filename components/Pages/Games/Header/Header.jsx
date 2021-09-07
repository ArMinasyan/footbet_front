// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// components
import { Title } from '../../common/Title/Title'
import { Bar } from './Bar/Bar'
import Select from 'react-select'
// styles
import styles from './Header.module.scss'
// icons 
import vector from '/public/images/games/selectvector.png'

export function Header({
    expClick,
    ordClick,
    bsStClick,
    expActive,
    ordActive,
    bsStActive,
    changeBySelect
}) {

    const
        // translation consfigs
        { t } = useTranslation('games'),
        translationPath = `${'header.barButtons.'}`,
        translate = key => t(`${translationPath}${key}`)

    const options = [
        { value: 'express_games', label: translate('express'), id: 'express' },
        { value: 'ordinar', label: translate('ordinar'), id: 'ordinar' },
        { value: 'bestStrategy', label: translate('bestStrategy'), id: 'bestStrategy' },
    ]

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px solid rgba(135, 12, 64, 0.34);',
            backgroundColor: "#12112c",
            color: state.isSelected ? '#9f0b45' : 'white',
            width: 'auto',
            height: '100%',
            padding: 7,
            whiteSpapcing: "nowrap",
            fontSize: '12px',
            lineHeight: '16px'

        }),
        control: () => ({
            display: 'flex',
            width: "100%",
            border: '1px solid rgba(135, 12, 64, 0.34)',
            backgroundColor: 'none',
            
            fontSize: '12px',
            lineHeight: '16px'
        }),
        menuList: () => ({
            padding: 0,
            border: '1px solid #9f0b45'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }


    return (
        <div className={styles.container}>
            <Title
                page='games'
                textPathName='header.barButtons.bestStrategy'
            />
        </div>
    )
}
