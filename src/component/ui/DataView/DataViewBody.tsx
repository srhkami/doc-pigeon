import type {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

type Props = {
  readonly className?: string,
  readonly children?: ReactNode,
}

export default function DataViewBody({className, children}: Props) {

  const classes = twMerge(
    'p-5', className
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}