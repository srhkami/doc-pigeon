import type {ReactNode} from "react";

type Props = {
  top?: ReactNode | null,
  header?: ReactNode | null,
  children: ReactNode
}


/* 顯示資料的通用組件 */
export default function DataLayout({
                                     top = null,
                                     header = null,
                                     children,
                                   }: Props) {
  return (
    <div className='border rounded-2xl'>
      <div className='bg-accent flex'>
        這是標頭處
      </div>
      <div className='p-5'>
        這是內容處
        {children}
      </div>
    </div>
  )
}