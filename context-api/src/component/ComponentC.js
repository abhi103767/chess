import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
  console.log("component c rendering");
  return (
    <div>
        <ComponentE />
        {/* <h1>Avinash Shamra</h1> */}
    </div>
  )
}

export default ComponentC