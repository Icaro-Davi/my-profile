import { Fragment, ReactNode } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { IconBaseProps } from 'react-icons';

interface StarRatingProps {
    rate: 1 | 2 | 3 | 4 | 5;
    iconProps?: IconBaseProps;
}

const DEFAULT_ICON_CONFIG: IconBaseProps = {
    size: 12,
}

const GenerateStarRating = (fillStars: number, iconProps?: IconBaseProps) => {
    const StarsReactNode: ReactNode[] = [];
    for (let index = 1; index <= 5; index++) {
        if (index <= fillStars) StarsReactNode.push(<BsStarFill key={`star-${index}`} {...iconProps} />);
        else StarsReactNode.push(<BsStar key={`star-${index}`} {...iconProps} />);
    }
    return StarsReactNode;
}

const StarRating: React.FC<StarRatingProps> = props => {
    return (
        <Fragment>
            {GenerateStarRating(props.rate, {...DEFAULT_ICON_CONFIG, ...props.iconProps})}
        </Fragment>
    )
}

export default StarRating;