import React from 'react'

export default function Button(props:{labelName:string, styleName: string}) {
    let {labelName, styleName}=props
  return (
    <button className={'px-4 py-2 my-2 border border-0 rounded h5 text-white '+styleName}>{labelName}</button>
  )
}
