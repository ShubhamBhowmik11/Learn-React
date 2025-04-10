import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicRouting = ({num}) => {
 let {id} = useParams();
  return (
    <div>
 
      <h1>{num} + shubham </h1>
    </div>
  )
}

export default DynamicRouting
