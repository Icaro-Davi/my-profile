import '../assets/styles/Global.less';
import React from 'react';
import { AppContext, AppProps } from 'next/app';

import { LayoutProvider } from '../context/layout';
import { LayoutInitialProps } from '../context/layout/interface.context';
import { getAppThemeType } from '../utils/Cookies';
import { detectDeviceType } from '../utils/detectDeviceType';
import rootsConfig from '../assets/rootsConfig.json';
import handleLocale from '../utils/handleLocale';

interface InitialAppProps extends AppProps {
  layoutProps: LayoutInitialProps;
}

const MyApp: React.FC<InitialAppProps> = ({ Component, layoutProps, pageProps: { head, ...pageProps } }) => (
  <React.Fragment>
    <LayoutProvider {...{ ...layoutProps }}>
      <Component {...pageProps} />
    </LayoutProvider>
  </React.Fragment>
);

MyApp['getInitialProps'] = async ({ Component, ctx }: AppContext) => {
  const pageProps = (Component.getInitialProps ? await Component.getInitialProps(ctx) : {} as any);
  const layoutProps: LayoutInitialProps = {};
  if (!process.browser) {
    layoutProps.themeType = getAppThemeType(ctx);
    layoutProps.startMenuVisibility = rootsConfig.find(config => config.href === ctx.pathname)?.menuProperties.visibility;
    (layoutProps.isMobile = detectDeviceType(ctx.req.headers['user-agent']).isMobile);
    layoutProps.locale = await handleLocale(ctx.req.headers['accept-language']);
  }
  return {
    pageProps,
    layoutProps
  };
}

export default MyApp;
