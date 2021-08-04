import Header from './header'
import Footer from './footer'
import Main from './main'
import { useState } from 'react'
function Body() {
  const [location, setLocation] = useState('')
  return (
    <div className="h-screen bg-black flex justify-center">
      <div className="w-3/4 self-center">
        <Header></Header>
        <Main setLocation={setLocation}></Main>
        <Footer location={location}></Footer>
      </div>
    </div>
  )
}

export default Body
