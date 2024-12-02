import React from 'react'

export default function Studata(props) {
  return (
        <div className='container2' >
            <ol text="none">
                <li>Name:   {props.Name}</li>
                <li>Class:   {props.Class}</li>
                <li>Section:   {props.Section}</li>
                <li className=   {props.Result} >Result:{props.Result} </li>
            </ol>
        </div>

  )
}
