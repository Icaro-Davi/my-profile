import { Col, message, Row, Typography, Grid, Anchor } from 'antd';
import { useUser } from '../../hooks/useUser';
import Loading from '../Loading';

const { Text, Title, Link, Paragraph } = Typography;

const UserCard: React.FC = props => {
    const breakpoints = Grid.useBreakpoint();
    const { user, isLoading } = useUser('icaro-davi', () => {
        message.error("Falha ao requisitar usuário", 6);
    });

    return (
        <Row align='middle' gutter={[16, 8]}>
            <Col xs={24}>
                <div className={`nz-flex-row  y-center`}>
                    <Loading circle isLoading={isLoading} size={100}>
                        <picture style={{ width: 100, height: 100 }} title={`Perfil de ${user?.name}`}>
                            <img style={{ width: 'inherit', height: "auto", borderRadius: "50%" }} alt={user?.name} src={user?.avatar_url} />
                        </picture>
                    </Loading>
                    <Loading hideBackground hideLoadingIcon isLoading={isLoading}>
                        <Title className='nz-padding-left-lg' level={2} title="Perfil">
                            Olá me chamo <b style={{ whiteSpace: 'nowrap' }}>{user?.name.replace(/([\w]*) ([\w]*) .*/g, "$1 $2")}</b>
                        </Title>
                    </Loading>
                </div>
            </Col>
            <Col xs={24}>
                <Loading hideLoadingIcon hideBackground isLoading={isLoading}>
                    <Paragraph className="nz-font-md nz-font-justify"  title="Perfil">
                        Sou bacharel em Sistemas de informação na <Link href="https://unijuazeiro.edu.br/">Unijuazeiro</Link>. 
                        Comecei a desenvolver no ano de 2017 e desde então busquei aprender novas tecnologias para aperfeiçoar meu 
                        conhecimento e conseguir produzir código com qualidade cada vez melhor. Estou a procura de um cargo de 
                        engenheiro de software junior, e junto da empresa conseguir evoluir para se tornar cada vez melhores.
                    </Paragraph>
                </Loading>
            </Col>
        </Row>
    )
}

export default UserCard;