// flag icons
import rusFlag from '/public/images/header/flags/rus.png'
import armFlag from '/public/images/header/flags/arm.svg'
import enFlag from '/public/images/header/flags/en.svg'
import espFlag from '/public/images/header/flags/esp.svg'
import frcFlag from '/public/images/header/flags/frc.svg'
import deuFlag from '/public/images/header/flags/deu.svg'


export const languages =
    [
        {
            lang: "am",
            contentOnTitle: 'am.onTitle',
            contentOnDrop: 'am.onDrop',
            icon: armFlag.src,
        },
        {
            lang: "rs",
            contentOnTitle: 'rs.onTitle',
            contentOnDrop: 'rs.onDrop',
            icon: rusFlag.src,
        },
        {
            lang: "en",
            contentOnTitle: 'en.onTitle',
            contentOnDrop: 'en.onDrop',
            icon: enFlag.src,
        },
        {
            lang: "esp",
            contentOnTitle: 'esp.onTitle',
            contentOnDrop: 'esp.onDrop',
            icon: espFlag.src,
        },
        {
            lang: "frc",
            contentOnTitle: 'frc.onTitle',
            contentOnDrop: 'frc.onDrop',
            icon: frcFlag.src,
        },
        {
            lang: "deu",
            contentOnTitle: 'deu.onTitle',
            contentOnDrop: 'deu.onDrop',
            icon: deuFlag.src,
        },
    ]
