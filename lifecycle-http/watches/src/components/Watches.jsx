import { useEffect, useState } from "react"

export const Watches = (props) => {

const {zone} = props

const [time, setTime] = useState()

let timeout;

useEffect(() => {
  console.log(zone);
  timeout = setInterval(() => {
    let userDate = new Date()
    userDate.setHours(userDate.getHours() + (zone.zone - Math.abs(new Date().getTimezoneOffset()/60)))
    setTime(userDate)
  }, 1000)
  return () => {
    window.clearTimeout(timeout)
  }
}, [])

  return (
    <>
      {time && <span>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</span>}
    </>
  )
}
