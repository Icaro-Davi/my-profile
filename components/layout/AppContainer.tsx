import '../../assets/styles/layout/AppContainer.less';
import { Content, Header } from 'antd/lib/layout/layout';
import { Grid } from 'antd';
import { useRouter } from 'next/router';

import Logo from '../Logo';
import HorizontalMenu, { horizontalMenuItems } from './HorizontalMenu';
import { useLayout } from '../../context/layout';
import SideMenu from './SideMenu';

const menuItems: horizontalMenuItems = [
    {
        label: 'Home',
        key: '/',
        href: '/'
    },
    {
        label: 'Contato',
        key: '/contact',
        href: '/contact'
    },
    {
        label: 'Portfólio',
        key: '/portfolio',
        href: '/portfolio'
    },
];

const AppContainer: React.FC = props => {
    const breakpoints = Grid.useBreakpoint();
    const router = useRouter();
    const { visibility, theme, device } = useLayout();
    const isScreenXsOrDeviceMobile = breakpoints.xs || device.isMobile;

    const handleLogoClick = () => {
        theme.name === 'dark'
            ? theme.change(old => ({ ...old, name: 'light' }))
            : theme.change(old => ({ ...old, name: 'dark' }))
    }
    return (
        <div className={`nz-flex-column nz-custom-scrollbar ${theme.name}-scrollbar nz-app-transition nz-${theme.name}-color-text nz-${theme.name}-color-title`} style={{ flex: 1 }}>
            {visibility.menu.top && (
                <Header className={`nz-flex-row nz-z-index-10 nz-top-menu nz-${theme.name}-background-1 nz-app-transition`}>
                    <Logo theme={theme.name} onClick={handleLogoClick} />
                    <HorizontalMenu {...{ menuItems, initialSelectedItemKey: router.pathname }} />
                </Header>
            )}
            <div className={`nz-flex-row nz-z-index-5 nz-container`}>
                {(visibility.menu.left && !isScreenXsOrDeviceMobile) && (
                    <div className={`nz-left-menu nz-${theme.name}-background-2 nz-flex-column x-center nz-app-transition`}>
                        <SideMenu />
                    </div>
                )}
                <Content className={`nz-main-container nz-${theme.name}-background-3 ${isScreenXsOrDeviceMobile ? 'nz-padding-lg' : 'nz-padding-xl'} nz-app-transition`}>
                    {props.children}
                </Content>                
            </div>
        </div>
    )
}

export default AppContainer;
