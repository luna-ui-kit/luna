'use client'
import style from './index.module.css'

export const BlockWrapper = ({
  children,
  fullWidth = false
}: Readonly<{
  children: React.ReactNode
  fullWidth?: boolean
}>) => {
  return (
    <div className={fullWidth ? style.wrapperFullWidth : style.wrapper}>
      {children}
    </div>
  )
}
