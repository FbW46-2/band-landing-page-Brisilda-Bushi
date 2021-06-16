import React from 'react'
import {useLocation} from "react-router-dom"

function PageNotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>Page {location.pathname} not Found!</h1>
    </div>
  )
}

export default PageNotFound
