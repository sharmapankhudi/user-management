import React from 'react'
import Example from './Example'
const ViewInput = (props) => {
    return (
        <div className="Form_Heading">
            <div class="div2">
                <p>Name : {props.name.fname} </p>
                <p>Email : {props.name.Email}</p>
                <p>Country :{props.name.country}</p>
                <p>State : {props.name.state}</p>
                <p>Pincode :{props.name.pincode}</p>
                <p>Ph No :{props.name.phoneNumber}</p>
            </div>
        </div>
    )
}

export default ViewInput;