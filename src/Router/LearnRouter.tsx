import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import New from "./New";
const Router = () => {

	return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login /> } />
          <Route path="/About" element={<About />} />
      
      </Routes>
    </BrowserRouter>
  
    </>
  );
  

};

export default Router;
