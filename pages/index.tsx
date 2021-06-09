import { NextPage } from 'next';
import { Col, Row, Typography } from 'antd';

import UserCard from '../components/UserCard';
import CustomDivider from '../components/Divider';
import { useLayout } from '../context/layout';

const { Paragraph, Text, Title, Link } = Typography;

const App: NextPage = props => {
    const { locale } = useLayout();
    return (
        <Row align='middle' gutter={[0, 8]}>
            <Col xs={24}>
                <CustomDivider orientation="left" >
                    <Title className="text nz-margin-none" level={3}>{locale.userCardProfileTitleDefaultTitle}</Title>
                </CustomDivider>
            </Col>
            <Col>
                <UserCard />
            </Col>
            <Col>
                <Paragraph className="nz-font-md nz-font-justify" title={locale.userCardProfileTitleDefaultTitle}>{locale?.userCardProfileBio}</Paragraph>
            </Col>
            <Col xs={24}>
                <CustomDivider orientation="left">
                    <Title className="text nz-margin-none" level={3}>Experiência</Title>
                </CustomDivider>
            </Col>
            <Col>
                <Paragraph className="nz-font-md nz-font-justify" title={locale.userCardProfileTitleDefaultTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae tempora nisi voluptates beatae, repudiandae itaque, vero, praesentium vel nam officiis. Doloremque esse iusto nobis iure odio a similique incidunt?</Paragraph>
            </Col>
            <Col xs={24}>
                <CustomDivider orientation="left">
                    <Title className="text nz-margin-none" level={3}>Formação acadêmica</Title>
                </CustomDivider>
            </Col>
            <Col>
                <Title className="text nz-margin-none" level={4} >Sistemas de informação (Dezembro 2020)</Title>
                <Link href="https://unijuazeiro.edu.br" target="_blank" className="nz-font-md">Unijuazeiro (Dezembro 2020)</Link>
                <li className="nz-margin-left-md nz-font-md"></li>
            </Col>
            <Col xs={24}>
                <CustomDivider orientation="left">
                    <Title className="text nz-margin-none" level={3}>Competências e habilidades</Title>
                </CustomDivider>
            </Col>
            <Col>
                <li className="nz-margin-left-md nz-font-md">Lorem 1</li>
                <li className="nz-margin-left-md nz-font-md">Lorem 2</li>
                <li className="nz-margin-left-md nz-font-md">Lorem 3</li>
                <li className="nz-margin-left-md nz-font-md">Lorem 4</li>
            </Col>
        </Row >
    )
};

export default App;