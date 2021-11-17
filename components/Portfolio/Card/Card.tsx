import { Typography } from 'antd';
import { AppThemeTypes } from '../../../context/layout/interface.context';
import Loading from '../../Loading';

const { Title, Paragraph, } = Typography;

export interface PortfolioCardProps {
    pictureSrc?: string;
    href?: string;
    loading?: boolean;
    title: string;
    description?: string;
    theme?: AppThemeTypes;
}

const PortfolioCard: React.FC<PortfolioCardProps> = props => (
    <Loading isLoading={props.loading}>
        <a target="__blank" href={props.href}>
            <div className={`nz-light-color-title nz-flex-column y-bottom nz-card-box nz-card-hoverable-${props.theme}`}>
                <img src={props.pictureSrc} />
                <div className="nz-padding-lg nz-z-index-5" >
                    <Title className="title nz-margin-none" level={3}>{props.title}</Title>
                    <Paragraph className="nz-font-md nz-font-justify nz-margin-none title">
                        {props.description}
                    </Paragraph>
                </div>
            </div>
        </a>
    </Loading >
);

export default PortfolioCard;