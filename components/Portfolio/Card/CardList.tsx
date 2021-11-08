import { Typography } from 'antd';
import React from 'react';

import { useLayout } from '../../../context/layout';

const { Title } = Typography;
import Card, { PortfolioCardProps } from './Card';

interface PortfolioCardListProps {
    title: string;
    cards: PortfolioCardProps[]
}

const CardList: React.FC<PortfolioCardListProps> = props => {
    const { theme } = useLayout();
    return (
        <React.Fragment>
            <Title level={2} style={{ textAlign: 'center' }}>{props.title}</Title>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, 285px)',
                justifyContent: 'center',
                justifyItems: 'center',
                gap: 20
            }}>
                {props.cards.map((properties, i) => (
                    <Card
                        {...{
                            key: `portfolio-card-${i}`,
                            ...properties,
                            theme: properties.theme || theme.name
                        }}
                    />
                ))}
            </div>
        </React.Fragment>
    )
}

export default CardList;