import Form from '../context/createForm'
import { useState } from 'react'
import Result from '../context/reportTable'

function Main({ setLocation }) {
  const [resultlList, setResultList] = useState([])
  setLocation(resultlList)
  return (
    <div className="bg-white p-5 flex flex-col ">
      <div className="bg-green-300 rounded-lg w-3/4 flex-col p-5 self-center">
        <h2 className="text-2xl text-center">Create Cookie Stand</h2>
        <Form onTakeResult={setResultList}></Form>
      </div>

      <Result onAddResult={resultlList}></Result>
    </div>
  )
}

export default Main
