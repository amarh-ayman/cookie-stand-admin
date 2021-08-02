import Form from '../context/form'
import { useState } from 'react'
import Result from '../context/outputOfForm'

function Main() {
  const [resultlList, setResultList] = useState([])
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
