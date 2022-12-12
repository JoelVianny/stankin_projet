import React, {useState} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateOrder = ({title, body, ...otherProps})=>{
    return(
        <div>
            <h1>{title}</h1>
            <main>{body}</main>
        </div>
    )
}
export default CreateOrder