import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='container-md about-section text-center'>
      <h1>Oops error 404</h1>
      <p>The page can not be found</p>
      <link to="/">
        <button className='btn btn-success'>Go back to Homepage</button>
      </link>
    </div>
  )
}

export default Error