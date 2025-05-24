import type {ButtonHTMLAttributes} from "react";
import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

type Props = {
  size?: "xl" | "lg" | "md" | "sm" | "xs",
  color?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error",
  style?: "outline" | "dash" | "soft" | "ghost" | "link",
  disabled?: boolean,
  shape?: 'block' | 'square' | 'circle', // 形狀
}

export function Button({
                         size,
                         color,
                         style,
                         disabled = false,
                         shape,
                         onClick,
                         className,
                         children
                       }: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = twMerge(
    'btn',
    className,
    clsx({
      [`btn-${size}`]: size,
      [`btn-${color}`]: color,
      [`btn-${style}`]: style,
      [`btn-${shape}`]: shape,
      'btn-disabled': disabled,
    })
  );

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
