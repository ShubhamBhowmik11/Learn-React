import { useContext } from "react";
import Sider from "./Sider";
import UserContext, { User} from "./UserContext";
const Dashboard = (): JSX.Element => {
      const user =useContext<User | null>(UserContext);
	return (
            
		<>
            
			<h1>Dashboard</h1>
                  {user?.name}
			<Sider></Sider>
		</>
	);
};
export default Dashboard;
