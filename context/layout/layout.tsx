import { createContext, useContext, useEffect, useState } from 'react';
import AppContainer from '../../components/layout/AppContainer';
import { saveAppThemeType } from '../../utils/Cookies';
import { AppTheme, LayoutContextProps, LayoutInitialProps, Visibility } from './interface.context';

export const LayoutProvider: React.FC<LayoutInitialProps> = props => {
    const [device] = useState({ isMobile: !!props.isMobile });
    const [componentVisibility, setComponentVisibility] = useState<Omit<Visibility, "change">>({
        menu: props.startMenuVisibility || { top: true, left: true }
    });
    const [theme, setTheme] = useState<Omit<AppTheme, "change">>({ name: props.themeType || 'light' });

    useEffect(() => { saveAppThemeType(theme.name) }, [theme]);

    return (
        <LayoutContext.Provider value={{
            device,
            visibility: {
                ...componentVisibility,
                change: setComponentVisibility,
            },
            theme: {
                ...theme,
                change: setTheme
            },
        }}>
            {Object.keys(componentVisibility).every(key => !componentVisibility[key])
                ? props.children
                : (
                    <AppContainer>
                        {props.children}
                    </AppContainer>
                )}
        </LayoutContext.Provider>
    )
}

const LayoutContext = createContext<LayoutContextProps>(null);
export const useLayout = () => useContext(LayoutContext);