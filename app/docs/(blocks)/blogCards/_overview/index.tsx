'use client'
import { Components } from './_Components'
import { ShowCase } from './_ShowCase'

export const Overview = () => {
  return (
    <>
      {Components.map((item, index) => (
        <ShowCase key={index} name={item.name} component={item.component} />
      ))}
    </>
  )
}
