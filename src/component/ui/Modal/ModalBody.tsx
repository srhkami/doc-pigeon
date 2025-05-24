import type {ReactNode} from "react";

type Props = {
  className?: string,
  children: ReactNode,
}

export default function ModalBody({className, children}: Props) {
  return (
    <div className={'my-2 ' + className}>
      {children}
    </div>
  )
}