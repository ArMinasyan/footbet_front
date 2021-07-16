// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// img
import secBack from '/public/images/main/news/secBack.png'
import trdBack from '/public/images/main/news/trdBack.png'
import fortBack from '/public/images/main/news/fortBack.png'
import backIcon from '/public/images/main/slideBack.png'

export const slide_show_data = () => {

    const
        // translation consfigs
        { t } = useTranslation('home'),
        translationPath = 'news.',
        translate = key => t(`${translationPath}${key}`)

    return [
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: secBack.src,
            description: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
        },
        {
            url: trdBack.src,
            description: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
        },
        {
            url: fortBack.src,
            description: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: secBack.src,
            description: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
        },
        {
            url: trdBack.src,
            description: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
        },
        {
            url: fortBack.src,
            description: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: secBack.src,
            description: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
        },
        {
            url: trdBack.src,
            description: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
        },
        {
            url: fortBack.src,
            description: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: secBack.src,
            description: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
        },
        {
            url: trdBack.src,
            description: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
        },
        {
            url: fortBack.src,
            description: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
        },
    ]
}