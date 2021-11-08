import '../../assets/styles/layout/AppContainer.less';
import { useEffect } from 'react';
import { Content, Header } from 'antd/lib/layout/layout';
import { Grid } from 'antd';
import { useRouter } from 'next/router';

import Logo from '../Logo';
import HorizontalMenu from './HorizontalMenu';
import { useLayout } from '../../context/layout';
import SideMenu from './SideMenu';
import rootsConfig from '../../assets/rootsConfig.json';

const AppContainer: React.FC = props => {
    const breakpoints = Grid.useBreakpoint();
    const router = useRouter();
    const { visibility, theme } = useLayout();

    const handleLogoClick = () => {
        theme.name === 'dark'
            ? theme.change(old => ({ ...old, name: 'light' }))
            : theme.change(old => ({ ...old, name: 'dark' }))
    }

    useEffect(() => {
        visibility.change(oldState => ({
            ...oldState,
            menu: rootsConfig.find(
                config => config.href === router.pathname
            )?.menuProperties.visibility || { left: false, top: true }
        }));
    }, [router.pathname]);

    return (
        <div className={`nz-flex-column nz-custom-scrollbar ${theme.name}-scrollbar nz-app-transition nz-${theme.name}-color-text nz-${theme.name}-color-title`} style={{ flex: 1 }}>
            {visibility.menu.top && (
                <Header className={`nz-flex-row nz-z-index-10 nz-top-menu nz-${theme.name}-background-1 nz-app-transition`}>
                    <Logo theme={theme.name} onClick={handleLogoClick} />
                    <HorizontalMenu {...{ menuItems: rootsConfig, initialSelectedItemKey: router.pathname }} />
                </Header>
            )}
            <div className={`nz-flex-row nz-z-index-5 nz-container`}>
                {(visibility.menu.left && !breakpoints.xs) && (
                    <div className={`nz-left-menu nz-${theme.name}-background-2 nz-flex-column x-center nz-app-transition`}>
                        <SideMenu />
                    </div>
                )}
                <Content className={`nz-main-container nz-${theme.name}-background-3 ${breakpoints.xs ? 'nz-padding-lg' : 'nz-padding-xl'} nz-app-transition`}>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}

export default AppContainer;
