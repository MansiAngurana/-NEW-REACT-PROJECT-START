import React from 'react'

export default function Mobile(props) {
  return (
    <div className='Content'>
<h3> <center>{props.Modelname}</center></h3>
{props.Description}<p>

</p>
<p>{props.Price}</p>
<p>{props.Review}<p></p></p>

    </div>

  )
}
