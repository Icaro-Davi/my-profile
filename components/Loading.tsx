import React from 'react';
import { Spin } from 'antd';
import { AiOutlineLoading } from 'react-icons/ai';

interface LoadingProps {
    isLoading: boolean;
    circle?: boolean;
    hideLoadingIcon?: boolean;
    hideBackground?: boolean;
}

const Loading: React.FC<LoadingProps> = props => {
    return !props.isLoading ? (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    ) : (
            <div style={{ position: 'relative' }}>
                <div style={{ filter: 'blur(5px)' }}>
                    {props.children}
                </div>
                <div
                    className="nz-flex-row x-center y-center"
                    style={{
                        ...props.circle ? { borderRadius: '50%' } : {},
                        position: 'absolute',
                        top: 0, left: 0,
                        width: '100%', height: '100%',
                        background: props.hideBackground ? 'transparent' : '#00000033',
                    }}
                >{props.hideLoadingIcon ? '' : <AiOutlineLoading className="nz-spin" size={30} />}</div>
            </div>
        );
}

export default Loading;