import { Col, Row, Typography } from "antd";
import * as Icon from 'react-icons/fa';
import { useLayout } from "../context/layout";
const { Title } = Typography;

const Contacts: React.FC = props => {
    const { locale } = useLayout();
    return (
        <Row>
            {locale.menu.sideMenu.contact.list.map((contact, i) => {
                let ContactIcon = Icon[contact.fontAwesomeIcon];
                return (
                    <Col key={`contact-${i}`} xs={24} md={8} lg={6}>
                        <a href={contact.url} target="__blank">
                            <div
                                className="nz-padding-md nz-margin-bottom-lg nz-flex-row x-center y-center"
                                style={{ width: "100%", border: "2px solid white", borderRadius: 10 }}
                            >
                                <ContactIcon size={40} className="nz-margin-right-md" />
                                <Title level={3} className="text nz-margin-none ">{contact.title}</Title>
                            </div>
                        </a>
                    </Col>
                )
            })}
        </Row>
    )
}

export default Contacts;