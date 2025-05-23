import {createBrowserRouter} from "react-router";
import Base from "../component/layout/Base.tsx";
import Home from "../component/pages/Home.tsx";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Base><Home/></Base>,
  },
])

export default routes;