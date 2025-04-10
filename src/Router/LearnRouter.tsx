import {
	BrowserRouter,
	createBrowserRouter,
	Link,
	NavLink,
	Route,
	RouterProvider,
	Routes,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
const Router = () => {
	return (
		<>
			<BrowserRouter>
      <NavLink to="/Home">Home</NavLink><br />
      <NavLink to="/About">about</NavLink>
				<Routes>
      
					<Route path="/Home" element={<Home />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/About" element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
