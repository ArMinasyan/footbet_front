const nextTranslate_i18nConfig = require('next-translate')()
nextTranslate_i18nConfig.i18n.localeDetection = false;


module.exports = {
    ...nextTranslate_i18nConfig,
    reactStrictMode: true,
}