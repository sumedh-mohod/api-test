import React, { useEffect, useState } from "react"

const Test = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://a2camp.xyz/api/v1/countries")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.uuid}>{user.country}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Test;
