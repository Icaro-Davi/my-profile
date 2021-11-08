import './tagStyle.less';

interface TagProps {
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
}

const Tag: React.FC<TagProps> = props => (
    <span
        className="nz-tag nz-margin-right-md nz-margin-bottom-md"
        style={{
            ...props.textColor ? { color: props.textColor} : {},
            ...props.backgroundColor ? { backgroundColor: props.backgroundColor } : {},
            ...props.borderColor ? { borderColor: props.borderColor } : {}
        }}
    >
        {props.children}
    </span>
)

export default Tag;