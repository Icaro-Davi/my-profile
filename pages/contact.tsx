import { Fragment } from "react";
import Head from 'next/head';

import { useLayout } from "../context/layout";
import Contacts from '../components/Contacts';

const Contact = () => {
    const { locale } = useLayout();
    return (
        <Fragment>
            <Head>
                <title>{locale.page.contact.name}</title>
            </Head>
            <Contacts />
        </Fragment>
    )
};

export default Contact;