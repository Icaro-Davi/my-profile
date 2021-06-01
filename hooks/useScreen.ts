import { useEffect, useState } from "react";

interface ScreenProperties {
    SCREEN_HEIGHT: number;
    SCREEN_WIDTH: number;
}

const initialState: ScreenProperties = {
    SCREEN_HEIGHT: 0,
    SCREEN_WIDTH: 0
}

export function useScreen(): ScreenProperties {
    let debounce = undefined;
    const [screenProperties, setScreenProperties] = useState<ScreenProperties>(initialState);

    function setScreenPropertiesByWindow(elements: Window) {
        setScreenProperties({
            SCREEN_HEIGHT: elements.innerHeight,
            SCREEN_WIDTH: elements.innerWidth,
        });
    }

    function handleScreenResize(this: Window, event?: UIEvent) {
        if (debounce) clearTimeout(debounce);
        debounce = setTimeout(() => setScreenPropertiesByWindow(this), 100);
    }

    useEffect(() => {
        setScreenPropertiesByWindow(window);
        window.addEventListener('resize', handleScreenResize);
        return () => window.removeEventListener('resize', handleScreenResize);
    }, []);

    return screenProperties;
}