import { useEffect, useState } from "react";
import responsiveObserve, { ScreenMap } from "../utils/responsiveObserver";

export function useBreakpoints(): ScreenMap {
    const [screens, setScreens] = useState<ScreenMap>({
        lg: true,
        md: true,
        sm: true,
        xl: true,
        xs: true,
        xxl: true
    });

    useEffect(() => {
        const token = responsiveObserve.subscribe(screen => {
            setScreens(screen);
        });

        return () => responsiveObserve.unsubscribe(token);
    }, []);

    return screens;
}