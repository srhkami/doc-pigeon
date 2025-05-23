import type {ReactNode} from "react";
import Nav from "./Nav.tsx";

type Props = {
  readonly children: ReactNode
}

export default function Base({children}:Props) {
  return (
    <>
      <Nav/>
      <main className='p-3 mt-3'>
        {children}
      </main>
    </>
  )
}