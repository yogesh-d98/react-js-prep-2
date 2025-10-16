import React from 'react'
import { Link } from 'react-router-dom'


// when a tag is used requires network also server req is happening
// when link tag is used incase of offline internally routing happen unwanted server req not required
export default function Notfound() {
    return (
        <div>
            <h2>Error 404</h2>
            <p>Page Not found</p>
            {/* <a className='btn btn-primary' href='/'>Home</a> not recommended */}
            <Link className='btn btn-primary' to='/'>Home</Link>
        </div>
    )
}
