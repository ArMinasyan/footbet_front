// hooks and helpers
import useTranslation from 'next-translate/useTranslation'
// img
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
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        },
        {
            url: backIcon.src,
            description: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
        }
    ]
}