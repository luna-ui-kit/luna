'use client'
import React from 'react'
import style from './index.module.css'

export const BlockWrapper = ({
  children,
  sx,
  fullWidth = false
}: Readonly<{
  children: React.ReactNode
  sx?: { backgroundColor?: string; border?: string; borderTop?: string }
  fullWidth?: boolean
}>) => {
  return (
    <>
      {fullWidth ? (
        <div className={style.wrapperFullWidth} style={{ ...sx }}>
          <div className={style.wrapper}>{children}</div>
        </div>
      ) : (
        <div className={style.wrapper}>{children}</div>
      )}
    </>
  )
}
