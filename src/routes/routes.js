import {
    PRODUCT,
    LOGIN,
  } from "./constant";
  import Login from "../component/Login";
  import Product from "../component/Product/Product";
  
  const Routes = [
    {
      path: LOGIN,
      exact: true,
      component: Login,
      isProtected: false
    },
    {
      path: PRODUCT,
      exact: true,
      component: Product,
      isProtected: true
    }
  ];
  
  export default Routes;