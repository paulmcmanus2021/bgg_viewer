import React from 'react';
import Input from '../components/Input'

function ErrorContainer(props){ 

    const username = props.match.params.id
     

    return(
        <div className="error-container">
            <h1>Sorry!</h1>
            <h2>{username} does not exist, check spelling and try again.</h2>
            <Input />
        </div>
    )
}

export default ErrorContainer;