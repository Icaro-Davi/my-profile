import { FiSun, FiMoon } from 'react-icons/fi';
import { AppThemeTypes } from '../context/layout/interface.context';

const Logo = (props: { theme: AppThemeTypes, onClick: () => void }) => (
    <div
        style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            boxSizing: 'border-box',            
        }}
        title={props.theme === 'dark' ? 'Lumos Maxima' : 'Nox'}
        onClick={props.onClick}
    >
        <div
            className={`nz-flex-row x-center y-center nz-${props.theme}-background-3 nz-padding-md`}
            style={{ borderRadius: '50%'}}
        >
            {props.theme === 'dark' ? <FiSun size={22} style={{ color: 'yellow' }} /> : <FiMoon size={22} style={{ color: 'black' }} />}
        </div>
    </div>
)

export default Logo;