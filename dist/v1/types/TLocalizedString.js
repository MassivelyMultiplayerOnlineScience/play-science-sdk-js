// Example:
// {
// 	"en": "Login",
// 	"fr": "Connexion"
// }
function translate(translations, locale, defaultLocale) {
    if (defaultLocale === void 0) { defaultLocale = "en"; }
    var translation = translations[locale];
    if (!translation)
        translation = translations[defaultLocale];
    if (!translation)
        translation = translations[""];
    if (!translation)
        translation = "NA";
    return translation;
}
export { translate };
//# sourceMappingURL=TLocalizedString.js.map