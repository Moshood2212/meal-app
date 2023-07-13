import React from 'react'
import{FallingLines}from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
}

export default Loading