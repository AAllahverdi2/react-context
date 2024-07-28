import FAvorite from "./Pages/FAvorite";
import Home from "./Pages/Home";
import MainRoot from "./Pages/MainRoot";
import AddCustomers from "./Pages/AddCustomers";
import CustomersList from "./Pages/CustomersList"
const ROUTES
=[
    {
       path:"/",
       element:<MainRoot/>,
       children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"FAvorite",
            element:<FAvorite/>
        },
        {
            path:"AddCustomers",
            element:<AddCustomers/>
        },
        {
            path:"CustomersList",
            element:<CustomersList/>
        },
       ] 
    }
]
export default ROUTES
