import { Divider, DividerProps } from 'antd';

const CustomDivider: React.FC<DividerProps> = props => <Divider {...props} style={{ ...props.style, borderColor: '#FFFFFF' }} />

export default CustomDivider;