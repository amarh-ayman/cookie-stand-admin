import { useState } from 'react'
const OnCreate = props => {
  const [hourly_sales, setHourly_sales] = useState([])
  let i = 0
  while (i < 6) {
    setHourly_sales(prevH => [...prevH, Math.floor(Math.random * props.max)])
    i--
  }

  return <li>sales are </li>
}

export default OnCreate
