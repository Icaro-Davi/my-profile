import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

interface LoadingProps {
    isLoading: boolean;
    circle?: boolean;
    hideLoadingIcon?: boolean;
    hideBackground?: boolean;
    size?: number;
}

const Loading: React.FC<LoadingProps> = props => {
    return !props.isLoading ? (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    ) : (
        <div style={{ position: 'relative', ...props.size ? {width: props.size, height: props.size } : {} }}>
            {React.Children.map(props.children, child =>
                (React.isValidElement(child)) ? React.cloneElement(child, {
                    ...child.props,
                    style: { ...child.props?.style, filter: 'blur(5px)' },
                }) : null)}
            <div
                className="nz-flex-row x-center y-center"
                style={{
                    ...props.circle ? { borderRadius: '50%' } : {},
                    filter: 'blur(0px)',
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    background: props.hideBackground ? 'transparent' : '#00000033',
                }}
            >{props.hideLoadingIcon ? '' : <AiOutlineLoading className="nz-spin" color="#FFFFFF" size={30} />}</div>
        </div>
    );
}

export default Loading;