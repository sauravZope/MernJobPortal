import { createBrowserRouter } from "react-router-dom";
import App from "../src/App"
import Home from "../src/Pages/Home";
import CreateJob from "../src/Pages/CreateJob";
import MyJobs from "../src/Pages/MyJobs";
import SalaryPage from "../src/Pages/SalaryPage";
import UpdateJob from "../src/Pages/UpdateJobs";
import Login from '../src/components/Login'
import SignUp from '../src/components/SignUp'
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children :[
      { path:"/",element: <Login/>},
       { path:"/home",element: <Home/>},
       {path:'/post-job',element:<CreateJob/>},
       {path:'/my-job',element:<MyJobs/>},
       {path:'/salary',element:<SalaryPage/>},
       {
        path:'edit-job/:id',element:<UpdateJob/>,
        loader: ({params})=>fetch(`http://localhost:5000/all-jobs/${params.id}`)
       },
       {
        path:'sign-up',element:<SignUp/>
       },
       { path:"login",element: <Login/>},
      ]
    },
  ]);
  
export  default router;

