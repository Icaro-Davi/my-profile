import { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { useLayout } from '../context/layout';
import Profile from '../components/Profile';

const Home: NextPage = props => {
    const { locale } = useLayout();
    return (
        <Fragment>
            <Head>
                <title>{locale.page.home.name}</title>
            </Head>
            <Profile />
        </Fragment>
    )
};

export default Home;