'use client'
import { ShowCase } from './_ShowCase'
import { Components } from './_Components'

export const Overview = () => {
  return (
    <>
      {Components.map((item, index) => (
        <ShowCase key={index} name={item.name} component={item.component} />
      ))}
    </>
  )
}
