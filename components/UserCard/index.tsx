import { Avatar, Col, message, Row, Typography, Grid } from 'antd';
import { useUser } from '../../hooks/useUser';
import Loading from '../Loading';

const { Text, Title } = Typography;

const UserCard: React.FC = props => {
    const breakpoints = Grid.useBreakpoint();
    const { user, isLoading } = useUser('icaro-davi', () => {
        message.error("Falha ao requisitar usuário", 6);
    });

    return (
        <Row align='middle' gutter={[16, 8]}>
            <Col>
                <div className={`${breakpoints.xs ? "nz-flex-column x-center" : "nz-flex-row"}  y-center`}>
                    <Loading circle hideBackground isLoading={isLoading}>
                        <Avatar
                            src={user?.avatar_url}
                            size={100}
                        />
                    </Loading>
                    <Loading hideBackground hideLoadingIcon isLoading={isLoading}>
                        <Title className='nz-padding-left-lg' level={2}>Olá me chamo {user?.name.replace(/([\w]*) ([\w]*) .*/g, "$1 $2")}</Title>
                    </Loading>
                </div>
            </Col>
            <Col>
                <Loading hideLoadingIcon hideBackground isLoading={isLoading}>
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate asperiores commodi maxime quasi vitae mollitia quos sunt vel, soluta, doloribus nesciunt laudantium fugit voluptatum quisquam, nam magnam vero magni.</Text>
                </Loading>
            </Col>
        </Row>
    )
}

export default UserCard;