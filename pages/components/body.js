import Header from './header'
import Footer from './footer'
import Main from './main'
function Body() {
  return (
    <div className="h-screen bg-black flex justify-center">
      <div className="w-3/4 self-center">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Body
