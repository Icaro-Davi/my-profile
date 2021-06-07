import { Col, message, Row, Typography } from 'antd';
import { useLayout } from '../../context/layout';
import { useUser } from '../../hooks/useUser';
import CustomDivider from '../Divider';
import Loading from '../Loading';

const { Title, Paragraph } = Typography;

const UserCard: React.FC = props => {
    const { locale } = useLayout();
    const { user, isLoading } = useUser('icaro-davi', () => {
        message.error(locale.userCardProfileErrorOnGetUser, 6);
    });
    
    return (
        <Row align='middle' gutter={[16, 8]}>
            <Col xs={24}>
                <div className={`nz-flex-row  y-center`}>
                    <Loading circle isLoading={isLoading} size={100}>
                        <picture style={{ width: 100, height: 100 }} title={`${user?.name}`}>
                            <img style={{ width: 'inherit', height: "auto", borderRadius: "50%" }} alt={user?.name} src={user?.avatar_url} />
                        </picture>
                    </Loading>
                    <Loading hideBackground hideLoadingIcon isLoading={isLoading}>
                        <Title className='nz-padding-left-lg' level={2} title={locale.userCardProfileTitleDefaultTitle}>
                            {locale.userCardProfileTitleMe} <b style={{ whiteSpace: 'nowrap' }}>{user?.name.replace(/([\w]*) ([\w]*) .*/g, "$1 $2")}</b>
                        </Title>
                    </Loading>
                </div>
            </Col>
            <Col xs={24}>
                <Paragraph className="nz-font-md nz-font-justify" title={locale.userCardProfileTitleDefaultTitle}>{locale?.userCardProfileBio}</Paragraph>
                <CustomDivider />
            </Col>
        </Row>
    )
}

export default UserCard;