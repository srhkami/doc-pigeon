import type {ReactNode} from "react";

type Props = {
  className?: string,
  divider?: boolean, // 分隔線（預設為否）
  children: ReactNode,
}

export default function ModalHeader({className, divider = false, children}: Props) {
  return (
    <>
      <div className={className}>
        {children}
      </div>
      {divider &&
        <div className='divider my-0'></div>
      }
    </>
  )
}