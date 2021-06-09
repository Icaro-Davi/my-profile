import { NextPage } from 'next';
import { Col, Row, Typography } from 'antd';

import UserCard from '../components/UserCard';
import CustomDivider from '../components/Divider';
import { useLayout } from '../context/layout';

const { Paragraph, Text } = Typography;

const App: NextPage = props => {
    const { locale } = useLayout();
    return (
        <Row align='middle' gutter={[0, 8]}>
            <Col xs={24}>
                <CustomDivider orientation="left" >
                    <Text className="nz-font-md">{locale.userCardProfileTitleDefaultTitle}</Text>
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
                    <Text className="nz-font-md">Experiência</Text>
                </CustomDivider>
            </Col>
            <Col>
                <Paragraph className="nz-font-md nz-font-justify" title={locale.userCardProfileTitleDefaultTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae tempora nisi voluptates beatae, repudiandae itaque, vero, praesentium vel nam officiis. Doloremque esse iusto nobis iure odio a similique incidunt?</Paragraph>
            </Col>
            <Col xs={24}>
                <CustomDivider orientation="left">
                    <Text className="nz-font-md">Soft Skills</Text>
                </CustomDivider>
            </Col>
            <Col>
                <li className="nz-font-md">Lorem 1</li>
                <li className="nz-font-md">Lorem 2</li>
                <li className="nz-font-md">Lorem 3</li>
                <li className="nz-font-md">Lorem 4</li>
            </Col>
        </Row >
    )
};

export default App;