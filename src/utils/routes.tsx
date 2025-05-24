import {createBrowserRouter} from "react-router";
import Base from "../component/layout/Base.tsx";
import Home from "../component/pages/Home.tsx";
import TestPage from "../component/pages/TestPage.tsx";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Base/>,
    children: [
      {path: '', element: <Home/>},
      {
        path: 'test',
        children: [
          {path: ':page', element: <TestPage/>}
        ]
      },
    ]
  },
])

export default routes;