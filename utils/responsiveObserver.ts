
type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
type BreakpointMap = Record<Breakpoint, string>;
export type ScreenMap = Partial<Record<Breakpoint, boolean>>;

const responsiveMap: BreakpointMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
}

type SubscriberFunc = (screens: ScreenMap) => void;
const subscribers = new Map<Number, SubscriberFunc>();
let subUid = -1;
let screens = {};

const responsiveObserve = {
    matchHandlers: {} as {
        [prop: string]: {
            mql: MediaQueryList;
            listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
        };
    },
    dispatch(pointMap: ScreenMap) {
        screens = pointMap;
        subscribers.forEach(func => func(screens));
        return subscribers.size >= 1;
    },
    subscribe(func: SubscriberFunc): number {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
    },
    unsubscribe(token: number) {
        subscribers.delete(token);
        if (!subscribers.size) this.unregister();
    },
    unregister() {
        Object.keys(responsiveMap).forEach((screen: Breakpoint) => {
            const matchMediaQuery = responsiveMap[screen];
            const handler = this.matchHandlers[matchMediaQuery];
            console.log(handler)
            // handler?.mql.removeListener(handler?.listener);
            handler?.mql.removeEventListener('change', handler?.listener);
        });
        subscribers.clear();
    },
    register() {
        Object.keys(responsiveMap).forEach((screen: Breakpoint) => {
            const matchMediaQuery = responsiveMap[screen];

            const listener = ({ matches }: { matches: boolean }) => {
                console.log(matches)
                this.dispatch({
                    ...screens,
                    [screen]: matches,
                });
            };

            const mql = window.matchMedia(matchMediaQuery);
            mql.addEventListener('change', listener);
            this.matchHandlers[matchMediaQuery] = {
                mql,
                listener
            };
            listener(mql);
        });
    },
}

export default responsiveObserve;