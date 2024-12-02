import React from 'react'

export default function Rticu(props) {
  return (
    <tr>
        <td>{props.sno}</td>
        <td>{props.post}</td>
        <td>{props.position}</td>
    </tr>
  )
}
