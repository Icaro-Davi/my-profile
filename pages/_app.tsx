import '../assets/styles/Global.less';
import { AppContext, AppProps } from 'next/app';

import { LayoutProvider } from '../context/layout';
import { LayoutInitialProps } from '../context/layout/interface.context';
import { getAppThemeType } from '../utils/Cookies';
import { detectDeviceType } from '../utils/detectDeviceType';
import rootsConfig from '../assets/rootsConfig.json';

interface InitialAppProps extends AppProps {
  layoutProps: LayoutInitialProps
}

const MyApp: React.FC<InitialAppProps> = ({ Component, layoutProps }) => {
  return (
    <LayoutProvider {...{ ...layoutProps }}>
      <Component />
    </LayoutProvider>
  )
}

MyApp['getInitialProps'] = async ({ Component, ctx }: AppContext) => {
  const pageProps = (Component.getInitialProps ? Component.getInitialProps(ctx) : {});
  const layoutProps: LayoutInitialProps = {};
  layoutProps.themeType = getAppThemeType(ctx);
  layoutProps.startMenuVisibility = rootsConfig.find(config => config.href === ctx.pathname).menuProperties.visibility;
  !process.browser && (layoutProps.isMobile = detectDeviceType(ctx.req.headers['user-agent']).isMobile);
  return {
    pageProps,
    layoutProps
  };
}

export default MyApp;
