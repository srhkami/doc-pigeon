import './App.css'
import {RouterProvider} from "react-router";
import routes from "./utils/routes.tsx"

export default function App() {
  return (
    <RouterProvider router={routes}/>
  );
}