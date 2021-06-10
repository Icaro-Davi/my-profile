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
                <Title className="text nz-margin-none" level={4}>
                    <Link href="https://handhead.com.br" target="_blank">Handhead</Link>
                </Title>
                <Text className="nz-font-md">Software Developer</Text>
                <Paragraph className="nz-margin-none">julho de 2019 - junho de 2021 (2 anos)</Paragraph>
                <Text>Crato, Ceará, Brasil</Text>
            </Col>
            <Col xs={24}>
                <CustomDivider orientation="left">
                    <Title className="text nz-margin-none" level={3}>Formação acadêmica</Title>
                </CustomDivider>
            </Col>
            <Col>
                <Title className="text nz-margin-none" level={4}>
                    <Link href="https://unijuazeiro.edu.br" target="_blank">Unijuazeiro (Dezembro 2020)</Link>
                </Title>
                <Text className="nz-font-md">Bacharel em sistemas de informação (Janeiro 2017 - Dezembro 2020)</Text>
                {/* https://www.sympla.com.br/baixar-certificado/X2g5pS9Ct2-XP8mro9lGF_n2M2KpnEnmKizg7rQOz30 */}
                <Text className="nz-font-md">Startup weekend Techstars</Text>
            </Col>
            <Col xs={24}>
                <CustomDivider orientation="left">
                    <Title className="text nz-margin-none" level={3}>Competências</Title>
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