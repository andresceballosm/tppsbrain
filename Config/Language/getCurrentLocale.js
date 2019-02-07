import I18n from 'react-native-i18n'; 

export const getCurrentLocale = () => {
    console.log('I18n.locale',I18n.locale);
    return I18n.locale;
}