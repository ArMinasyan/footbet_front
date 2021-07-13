// translation 
import useTranslation from 'next-translate/useTranslation'
// flag icons
import rusFlag from '/public/images/header/flags/rus.png'
import armFlag from '/public/images/header/flags/arm.svg'
import enFlag from '/public/images/header/flags/en.svg'
import espFlag from '/public/images/header/flags/esp.svg'
import frcFlag from '/public/images/header/flags/frc.svg'
import deuFlag from '/public/images/header/flags/deu.svg'


export function languages() {
    const
        { t } = useTranslation('common'),
        translationPath = 'header.lang.',
        translate = (key) => t(`${translationPath}${key}`),

        languages = [
            {
                lang: "am",
                contentOnTitle: translate('am.onTitle'),
                contentOnDrop: translate('am.onDrop'),
                icon: armFlag.src,
            },
            {
                lang: "rs",
                contentOnTitle: translate('rs.onTitle'),
                contentOnDrop: translate('rs.onDrop'),
                icon: rusFlag.src,
            },
            {
                lang: "en",
                contentOnTitle: translate('en.onTitle'),
                contentOnDrop: translate('en.onDrop'),
                icon: enFlag.src,
            },
            {
                lang: "esp",
                contentOnTitle: translate('esp.onTitle'),
                contentOnDrop: translate('esp.onDrop'),
                icon: espFlag.src,
            },
            {
                lang: "frc",
                contentOnTitle: translate('frc.onTitle'),
                contentOnDrop: translate('frc.onDrop'),
                icon: frcFlag.src,
            },
            {
                lang: "deu",
                contentOnTitle: translate('deu.onTitle'),
                contentOnDrop: translate('deu.onDrop'),
                icon: deuFlag.src,
            },
        ]

    return languages
}
