import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {

const Layout = () => {
  return(
    <div>
          
           <div style={{display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 5}}>
            <Outlet />
            </div>
            <RightBar />
           </div>
    </div>
  );
};
const ProtectedRoute =({children}) =>{
  return children;
};
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]

    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
</div>
  
);
  
}

export default App;
