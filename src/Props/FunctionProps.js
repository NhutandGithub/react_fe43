import React from 'react'

export default function FunctionProps(props) {

   return (
      <div>
         <h2>State LESS</h2>
         <div className="card text-left">
            <img className="card-img-top" src={props.meo.srcImg} style={{width:"500px"}} alt />
            <div className="card-body">
               <h4 className="card-title">{props.meo.name}</h4>
               <p className="card-text">{props.meo.age}</p>
            </div>
         </div>

      </div>
   )
}
