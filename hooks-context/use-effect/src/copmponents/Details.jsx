import { useState, useEffect } from "react"

export const Details = (props) => {
    const {userId} = props

    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
      setLoading(true)
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`)
        .then(response => response.json())
        .then(data => {
          setUserDetails(data)
          setLoading(false)
        })
    },[userId])

    function Info({id})  {
      return (
        id
          ? <div className="userdetails-container">
              <img src={userDetails.avatar} alt="avatar" />
              <span><h2>{userDetails.name}{userDetails.id}</h2></span>
              <span>City: {userDetails.details.city}</span>
              <span>Company: {userDetails.details.company}</span>
              <span>Position: {userDetails.details.position}</span>
            </div>
          : <></>       
      )
    }

  return <>
    {loading 
      ? <span className="loader"></span>
      : <Info id = {userDetails.id}/>
    }
  </>;
}
