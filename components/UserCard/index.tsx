import { Avatar, Col, message, Row, Typography } from 'antd';
import { useUser } from '../../hooks/useUser';

const { Text, Title } = Typography;

const UserCard: React.FC = props => {

    const { user } = useUser('icaro-davi', () => {
        message.error("Falha ao requisitar usuário", 6);
    });

    return (
        <Row gutter={[16,0]}>
            <Col>
                <Avatar
                    src={user?.avatar_url}
                    size={100}
                />
            </Col>
            <Col>
                <div>
                    <Title>Olá me chamo {user.name.replace(/([\w]*) ([\w]*) .*/g, "$1 $2")}</Title>
                </div>
            </Col>
        </Row>
    )
}

export default UserCard;