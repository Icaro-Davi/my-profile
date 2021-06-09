import { FaFreeCodeCamp, FaLinkedin, FaInstagram, FaGithub, FaMailBulk } from 'react-icons/fa';
import React, { ReactElement } from 'react';
import { useLayout } from '../../context/layout';

const SocialMedias = () => {
    const { theme } = useLayout();
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
            <SocialMediaButton
                title="GitHub"
                icon={<FaGithub />}
                href="https://github.com/icaro-davi"
            />
            <SocialMediaButton
                title="LinkedIn"
                icon={<FaLinkedin />}
                href="https://www.linkedin.com/in/icaro-davi/"
            />
            <SocialMediaButton
                title="Instagram"
                icon={<FaInstagram />}
                href="https://www.instagram.com/icaro_davi_/"
            />
            <SocialMediaButton
                title="FreeCodeCamp"
                icon={<FaFreeCodeCamp />}
                href="https://www.freecodecamp.org/icaro-davi"
            />
            <SocialMediaButton
                title="Email"
                icon={<FaMailBulk />}
                href="mailto:icarodaviduarte@gmail.com"
            />
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