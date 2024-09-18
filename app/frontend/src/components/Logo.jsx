import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ position }) => {
    return (
        <div>
            {position === "top"
                ?
                <Link to={'/'}>
                    <h1 className='text-black text-3xl dark:text-white font-bold tracking-tighter'>ZeroByte</h1>
                </Link>
                :
                <h1 className='text-black text-3xl dark:text-white font-bold tracking-tighter'>ZeroByte</h1>
            }

        </div>
    )
}

export default Logo