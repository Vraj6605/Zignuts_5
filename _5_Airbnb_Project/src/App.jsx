import Card from "./Components/Card"
import Content from "./Components/Content"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <div className="w-[550px] h-[900px]  overflow-hidden m-auto mb-[100px] bg-[#FFFFFF]">
      <Navbar/>
      <Hero/>
      <Content/>
      <Card/>
    </div>
  )
}

export default App
