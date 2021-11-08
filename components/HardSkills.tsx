import { Progress, Row, Col } from 'antd';
import colors from '../assets/colors/colors.json';

interface HardSkillsProps {
    userSkills: {
        name: string;
        percent: number;
    }[];
}

const HardSkills: React.FC<HardSkillsProps> = props => (
    <Row style={{ width: '100%' }}>
        {props?.userSkills.map((skill, i) => (
            <Col key={`hard-skill-${i}`} xs={12} md={6} lg={4} xl={3} xxl={2}>
                <div className="nz-flex-column x-center">
                    <span className="nz-padding-md" style={{ fontSize: '1.3em', textAlign: 'center' }}>{skill.name}</span>
                    <Progress
                        type="circle"
                        percent={skill.percent}
                        strokeColor="#39ff14"                        
                    />
                </div>
            </Col>
        ))}
    </Row>
);

export default HardSkills;