import React, {useState} from 'react'


function Input(){

    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location = "/collection"
    }

    return( 
        
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="e.g. paulmcmanus" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <input type="submit" value="Submit" />
            </form>
        
    )
}

export default Input;