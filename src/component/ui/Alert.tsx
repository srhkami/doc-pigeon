import type {DetailedHTMLProps, HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";

type Props = {
  color?: null | 'info' | 'success' | 'warning' | 'error',
  style?: null | 'outline' | 'dash' | 'soft',
}

export default function Alert({
                                color,
                                style,
                                className,
                                children
                              }: Props & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

  const classes = twMerge(
    'alert',
    className,
    clsx({
      [`alert-${color}`]: color,
      [`alert-${style}`]: style,
    })
  );

  return (
    <div role="alert"
         className={classes}>
      {children}
    </div>
  )
}