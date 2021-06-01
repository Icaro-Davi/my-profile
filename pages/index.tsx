import { Typography, Divider } from 'antd'
import UserCard from '../components/UserCard';

const { Text, Title } = Typography;

const App = () => {
    return (
        <>
            <UserCard />
            {/* <div style={{ width: '100%' }}>

                <Title>35123926</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum molestiae a, saepe tempore vero, commodi ipsam est nemo neque dolores voluptates labore inventore maxime consequuntur minima fugiat iure similique.</Text>
                <Divider style={{ width: "100%", borderColor: "#fff" }} />
            </div> */}
        </>
    )
};

export default App;