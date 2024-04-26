import { useEffect } from "react"
import useJsonFetch from "../hooks/useJsonFetch"

export const UserFetch = (props) => {

    const {url} = props
    const [data, loading] = useJsonFetch(url)

    console.log(loading);
  return (
    <div>
        {loading 
        ? <span className="loader"></span>
        : data}
    </div>
  )
}
