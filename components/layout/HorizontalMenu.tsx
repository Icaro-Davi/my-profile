import { useRef } from 'react';
import Link from 'next/link';
import * as Icon from 'react-icons/fa';
import { Grid } from 'antd';

import { useLayout } from '../../context/layout';

interface HorizontalMenuProps {
    menuItems: horizontalMenuItems;
    initialSelectedItemKey: string;
}

export type horizontalMenuItems = {
    label?: string;
    key: string;
    href: string;
    icon?: string;
    menuProperties: {
        hideMenuOn?: {
            xs?: boolean;
            sm?: boolean;
            md?: boolean;
            lg?: boolean;
            xl?: boolean;
            xxl?: boolean;
        }
    }
}[];

const HorizontalMenu: React.FC<HorizontalMenuProps> = props => {
    const { theme, device, locale } = useLayout();
    const breakpoints = Grid.useBreakpoint();
    const horizontalMenuLineRef = useRef<HTMLDivElement>(null);
    function handleMenuLine(e: HTMLAnchorElement) {
        if (horizontalMenuLineRef.current) {
            horizontalMenuLineRef.current.style.left = `${e.offsetLeft}px`;
            horizontalMenuLineRef.current.style.width = `${e.offsetWidth}px`;
        }
    }

    const handleLocale = (menuItems: horizontalMenuItems) => menuItems.map(item => ({
        ...item,
        label: locale.menu.horizontalMenu.find(menuLocale => menuLocale.key === item.key).name
    }));

    const MenuItems = (items: horizontalMenuItems, activeKey: string, onlyIcons?: boolean) => {
        return items.map(item => {
            let CustomIcon = Icon[item.icon];
            if (item.menuProperties.hideMenuOn) {
                let hide = Object.keys(item.menuProperties.hideMenuOn).some(breakpoint => item.menuProperties.hideMenuOn[breakpoint] && breakpoints[breakpoint]);
                if (hide) return;
            }
            return (
                <Link href={item.href} key={item.key}>
                    <a
                        className={`menu-item ${theme.name}-glow nz-margin-right-${device.isMobile ? 'lg' : 'xl'} nz-${theme.name}-color-title title`}
                        ref={(e) => e && activeKey === item.key && handleMenuLine(e)}
                        onClick={(e) => handleMenuLine(e.currentTarget)}
                    >{item.label || ((onlyIcons && item?.icon) && <CustomIcon />)}</a>
                </Link>
            )
        });
    }

    return (
        <div className="horizontal-menu-container nz-padding-left-lg">
            {MenuItems(handleLocale(props.menuItems), props.initialSelectedItemKey, true)}
            <div ref={horizontalMenuLineRef} className={`horizontal-menu ${theme.name}-line`} />
        </div>
    )
}

export default HorizontalMenu;