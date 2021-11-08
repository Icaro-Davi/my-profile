import defaultLocale from '../locale/pt-BR.json';

type L = typeof defaultLocale;

export interface Locale extends L {}

const getLocale = async (language) => {
    try {
        const locale = (await import(`../locale/${language}`)).default as Locale;        
        return locale;
    } catch (error) {
        return defaultLocale as Locale;
    }
};

const handleLocation = async (locale: string, onError?: (error: any) => void) => {
    try {
        if (process.browser) {
            return await getLocale(navigator.language);
        }
        if (locale) {
            const language = locale.split(',')[0];
            return await getLocale(language);
        }
        return defaultLocale as Locale;
    } catch (error) {
        console.log('Failed to set page locale.');
        onError && onError(error);
    }
}

export default handleLocation;