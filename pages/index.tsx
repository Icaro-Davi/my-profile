import { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Col, Row, Typography, Timeline } from 'antd';

import UserCard from '../components/UserCard';
import CustomDivider from '../components/Divider';
import { useLayout } from '../context/layout';
import Tag from '../components/Tag';

const { Paragraph, Text, Title, Link } = Typography;

const Home: NextPage = props => {
    const { locale } = useLayout();
    return (
        <Fragment>
            <Head>
                <title>{locale.home.name}</title>
            </Head>
            <Row align='middle' gutter={[0, 8]}>
                <Col xs={24}>
                    <UserCard />
                </Col>
                <Col>
                    <Paragraph className="nz-font-md nz-font-justify">{locale.home.profile.bio}</Paragraph>
                </Col>
                <Col xs={24}>
                    <CustomDivider orientation="left">
                        <Title className="text nz-margin-none" level={3}>{locale.home.profile.professional.experience.title}</Title>
                    </CustomDivider>
                </Col>
                {locale.home.profile.professional.experience.jobs.map((job, i) => (
                    <Col xs={24} key={`profile-experience-job-${i}`}>
                        <Title className="text nz-margin-none" level={4}>
                            <Link href={job.url} target="_blank">{job.company}</Link>
                        </Title>
                        <Text className="nz-font-md">{job.role}</Text>
                        <Paragraph className="nz-margin-none">{job.activity}</Paragraph>
                        <Text>{`${job.locale.city}, ${job.locale.state}, ${job.locale.country}`}</Text>
                    </Col>
                ))}
                <Col xs={24}>
                    <CustomDivider orientation="left">
                        <Title className="text nz-margin-none" level={3}>{locale.home.profile.academic.title}</Title>
                    </CustomDivider>
                </Col>
                {locale.home.profile.academic.studiedAt.map((studiedAt, i) => (
                    <Col xs={24} key={`profile-academic-${i}`}>
                        <Title className="text nz-margin-none" level={4}>
                            <Link href={studiedAt.url} target="_blank">{studiedAt.name}</Link>
                        </Title>
                        <Paragraph className="nz-font-md nz-margin-none">{`${studiedAt.course} ${studiedAt.activity}`}</Paragraph>
                    </Col>
                ))}
                <Col xs={24}>
                    <CustomDivider orientation="left">
                        <Title className="text nz-margin-none" level={3}>{locale.home.profile.certifications.title}</Title>
                    </CustomDivider>
                </Col>
                <Col xs={24} md={12} lg={10} xl={7} xxl={4}>
                    <Timeline mode="left">
                        {locale.home.profile.certifications.list.map((certificate, i) => (
                            <Timeline.Item key={`profile-academic-${i}`} label={certificate.company}><a href={certificate.url} target="__blank">{certificate.name}</a></Timeline.Item>
                        ))}
                    </Timeline>
                </Col>                
                <Col xs={24}>
                    <CustomDivider orientation="left">
                        <Title className="text nz-margin-none" level={3}>{locale.home.profile.skills.hardSkills.title}</Title>
                    </CustomDivider>
                </Col>
                <Col xs={24}>
                    <div className="nz-flex-row" style={{ flexFlow: 'wrap' }}>
                        {locale.home.profile.skills.hardSkills.list.map((skill, i) => (
                            <Tag key={`hard-skills-${i}`} borderColor="#FFF" backgroundColor="#FFFFFF29">{skill}</Tag>
                        ))}
                    </div>
                </Col>
                <Col xs={24}>

                </Col>
            </Row >
        </Fragment >
    )
};

export default Home;