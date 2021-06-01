export interface LayoutInitialProps {
    themeType?: AppThemeTypes;
    isMobile?: boolean;
}

export interface LayoutContextProps {
    visibility: Visibility;
    theme: AppTheme;
    device: {
        isMobile: boolean;
    }
}

export type ChangeStateFunc<T> = (value: (oldState: T) => T) => void;

// Visibility
export type Visibility = {
    menu: MenuVisibility;
    change: ChangeStateFunc<Visibility>;
}

type MenuVisibility = {
    top: boolean;
    left: boolean;
}

export type AppThemeTypes = 'light' | 'dark';
export type AppTheme = {
    name: AppThemeTypes;
    change: ChangeStateFunc<AppTheme>
}
