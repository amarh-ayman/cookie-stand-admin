import Form from '../context/createForm'
import ReportTable from '../context/reportTable'

import { useState, useEffect } from 'react'
import axios from 'axios'

function CookieStandMain({ token, reportList }) {
  return (
    <div className="bg-white p-5 flex flex-col ">
      <div className="bg-green-300 rounded-lg w-3/4 flex-col p-5 self-center">
        <h2 className="text-2xl text-center">Create Cookie Stand</h2>
        <Form token={token}></Form>
      </div>

      <ReportTable token={token} reportList={reportList}></ReportTable>
    </div>
  )
}

export default CookieStandMain
