import { Divider, DividerProps } from 'antd';

const CustomDivider: React.FC<DividerProps> = props => <Divider {...props} style={{ borderColor: '#FFFFFF', ...props.style,  }} />

export default CustomDivider;