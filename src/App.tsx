import Footer from './Pages/Footer/Footer'
import Navbar from './Pages/Navbar/Navbar'
import Presentation from './Pages/Presentation/Presentation'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skills'

import './global.scss'

function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Presentation/>
      <Skills /> 
      <Projects />
      <Footer /> 
    </div>
  )
}

export default App
