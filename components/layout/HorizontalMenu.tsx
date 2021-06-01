import '../../assets/styles/layout/HorizontalMenu.less';
import { useRef } from 'react';
import Link from 'next/link';
import { useLayout } from '../../context/layout';

interface HorizontalMenuProps {
    menuItems: horizontalMenuItems;
    initialSelectedItemKey: string;
}

export type horizontalMenuItems = {
    label: string;
    key: string;
    href: string;
}[];

const HorizontalMenu: React.FC<HorizontalMenuProps> = props => {
    const { theme, device } = useLayout();
    const horizontalMenuLineRef = useRef<HTMLDivElement>(null);

    function handleMenuLine(e: HTMLAnchorElement) {
        if (horizontalMenuLineRef.current) {
            horizontalMenuLineRef.current.style.left = `${e.offsetLeft}px`;
            horizontalMenuLineRef.current.style.width = `${e.offsetWidth}px`;
        }
    }

    const MenuItems = (items: horizontalMenuItems, activeKey: string) => {
        return items.map(item => (
            <Link href={item.href} key={item.key}>
                <a
                    className={`menu-item ${theme.name}-glow nz-margin-right-${device.isMobile ? 'lg' : 'xl'} nz-${theme.name}-color-title title`}
                    ref={(e) => e && activeKey === item.key && handleMenuLine(e)}
                    onClick={(e) => handleMenuLine(e.currentTarget)}                    
                >{item.label}</a>
            </Link>
        ));
    }

    return (
        <div className="horizontal-menu-container nz-padding-left-lg">
            {MenuItems(props.menuItems, props.initialSelectedItemKey)}
            <div ref={horizontalMenuLineRef} className={`horizontal-menu ${theme.name}-line`} />
        </div>
    )
}

export default HorizontalMenu;