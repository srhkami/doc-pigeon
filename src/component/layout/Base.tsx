import Nav from "./Nav.tsx";
import {Outlet} from "react-router";

export default function Base() {
  return (
    <>
      <Nav/>
      <main className='px-2 sm:px-3 md:px-6 mt-3'>
        <Outlet/>
      </main>
    </>
  )
}