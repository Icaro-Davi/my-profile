// Cookie to server-side
import Cookies from 'cookies';
//Cookie to client-side
import jsCookies from 'js-cookie';

import { NextPageContext } from 'next';
import { AppThemeTypes } from '../context/layout/interface.context';

const keys = {
    appThemeType: 'appThemeType'
}

export const saveAppThemeType = (themeType: string, ctx?: NextPageContext) => {
    try {
        if (process.browser) {
            jsCookies.set(keys.appThemeType, themeType);
        } else if (ctx) {
            const cookies = new Cookies(ctx.req, ctx.res);
            cookies.set(keys.appThemeType, themeType);
        }
    } catch (error) {
        console.log(error)
        throw new Error('Failed to set app theme type into cookies');
    }
}

export const getAppThemeType = (ctx?: NextPageContext): AppThemeTypes => {
    try {
        if (process.browser) {
            return jsCookies.get(keys.appThemeType) as AppThemeTypes;
        }
        if (!process.browser && ctx) {
            const cookies = new Cookies(ctx.req, ctx.res);
            return cookies.get(keys.appThemeType) as AppThemeTypes;
        }
    } catch (error) {
        throw new Error('Failed to get app theme type');
    }
}