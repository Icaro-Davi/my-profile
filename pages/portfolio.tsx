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
                <title>{locale.page.portfolio.name}</title>
            </Head>
            <CardList
                title={locale.page.portfolio.section.portfolioCards.title}
                cards={locale.page.portfolio.section.portfolioCards.list}
            />
        </Fragment>
    );
};

export default Portfolio;