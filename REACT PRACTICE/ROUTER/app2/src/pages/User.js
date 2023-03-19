import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
function User() {
  const [searchParams,setSEarchParams] = useSearchParams();

 // const {userid} = useParams();
  return (
    <div>
     
      <h2>User ID is{searchParams.get("id")}</h2>
    </div>
  )
}

export default User
