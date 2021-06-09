import { message, Typography } from 'antd';
import { useLayout } from '../../context/layout';
import { useUser } from '../../hooks/useUser';
import Loading from '../Loading';

const { Title, } = Typography;

const UserCard: React.FC = props => {
    const { locale } = useLayout();
    const { user, isLoading } = useUser('icaro-davi', () => {
        message.error(locale.userCardProfileErrorOnGetUser, 6);
    });

    return (
        <div className={`nz-flex-row  y-center`}>
            <Loading circle isLoading={isLoading} size={100}>
                <picture style={{ width: 100, height: 100 }} title={`${user?.name}`}>
                    <img style={{
                        width: 'inherit',
                        height: "auto",
                        borderRadius: "50%",                        
                    }} alt={user?.name} src={user?.avatar_url} />
                </picture>
            </Loading>
            <Loading hideBackground hideLoadingIcon isLoading={isLoading}>
                <Title className='nz-padding-left-lg text' level={4} title={locale.userCardProfileTitleDefaultTitle}>
                    {locale.userCardProfileTitleMe} {user?.name.replace(/([\w]*) ([\w]*) .*/g, "$1 $2")}
                </Title>
            </Loading>
        </div>
    )
}

export default UserCard;