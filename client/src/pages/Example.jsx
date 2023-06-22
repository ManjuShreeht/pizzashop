import React from 'react'
import { Link } from 'react-router-dom';

const Example = () => {
  return (
    <div>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact</Link>
    </div>
  )
}

export default Example