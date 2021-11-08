import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { CardList } from '../components/Portfolio/Card';
import { useLayout } from '../context/layout';

const Portfolio: NextPage = () => {
    const { locale } = useLayout();
    return (
        <Fragment>
            <Head>
                <title>{locale.portfolio.name}</title>
            </Head>
            <CardList
                title="Projetos que já participei"
                cards={[
                    {
                        title: "Mìticard (2020)",
                        href: "https://miticard.com.br",
                        pictureSrc: "/portfolio/miticard.jpg",
                        description: "https://miticard.com.br"
                    },
                    {
                        title: "Mostruário (2020)",
                        href: "https://site.mostruar.io",
                        pictureSrc: "/portfolio/mostruario.jpg",
                        description: "Cadastre sua loja e venda online seus produtos."
                    },
                    {
                        title: "Mallbuyle (2021)",
                        href: "https://play.google.com/store/apps/details?id=br.com.mallbuyle",
                        pictureSrc: "/portfolio/mallbuyle.jpg",
                        description: 'App de vendas de produtos por região.'
                    },
                ]}
            />
        </Fragment>
    );
};

export default Portfolio;