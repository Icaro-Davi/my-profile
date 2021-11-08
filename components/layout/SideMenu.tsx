import * as FontAwesome from 'react-icons/fa';
import React, { ReactElement } from 'react';
import { useLayout } from '../../context/layout';

const SocialMedias = () => {
    const { theme, locale } = useLayout();
    const SocialMediaButton = (props: { icon: ReactElement, href: string, title: string }) => (
        <a
            className={`nz-padding-md nz-margin-top-md nz-flex-row x-center y-center nz-${theme.name}-background-3 title`}
            href={props.href} title={props.title} target="_blank"
            style={{ borderRadius: '50%' }}
        >{React.cloneElement(props.icon, {
            title: props.title,
            className: `nz-${theme.name}-color-title`,
            size: 25
        })}</a>
    );
    return (
        <React.Fragment>
            {locale.menu.sideMenu.contact.list.map((contact, i) => {
                const FontAwesomeIcon = FontAwesome[contact.fontAwesomeIcon];
                return (
                    <SocialMediaButton
                        key={`contact-${i}`}
                        title={contact.title}
                        icon={<FontAwesomeIcon />}
                        href={contact.url}
                    />
                )
            })}           
        </React.Fragment>
    )
}

const SideMenu: React.FC = () => {

    return (
        <React.Fragment>
            <SocialMedias />
        </React.Fragment>
    )
}

export default SideMenu;