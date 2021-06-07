import { useState } from 'react';
import { Locale } from '../utils/handleLocale';

export const usePageLocale = (initialLocaleState: Locale) => {
    const [locale] = useState<Locale>(initialLocaleState);
    return locale;
}