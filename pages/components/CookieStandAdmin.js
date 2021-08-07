import CookieStandHeader from './CookieStandHeader'
import CookieStandFooter from './CookieStandFooter'
import CookieStandMain from './CookieStandMain'
import Headd from './head'
import { useState, useEffect } from 'react'
import axios from 'axios'

function CookieStandAdmin({ token, setToken }) {
  const [reportList, setReportList] = useState([])

  useEffect(() => {
    if (token) {
      getCookiesFromAPI()
    }
  }, [token, reportList])

  async function getCookiesFromAPI() {
    const config = { headers: { Authorization: 'Bearer ' + token } }
    const answers = await axios.get(
      'https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/',
      config
    )
    setReportList(answers.data)
  }
  return (
    <>
      <Headd></Headd>
      <div className="h-screen bg-black flex justify-center">
        <div className="w-3/4 self-center">
          <CookieStandHeader
            token={token}
            setToken={setToken}
          ></CookieStandHeader>
          <CookieStandMain
            token={token}
            reportList={reportList}
          ></CookieStandMain>
          <CookieStandFooter reportList={reportList}></CookieStandFooter>
        </div>
      </div>
    </>
  )
}

export default CookieStandAdmin
