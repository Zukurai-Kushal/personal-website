import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import WebDevProjects from './components/WebDevProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <a href='#profile-container'>About Me</a>
        <a href='#section-web-dev'>Web Dev Projects</a>
        <a href='#section-other-projects'>Other Projects</a>
      </nav>
      <Header/>
      <main>
        <WebDevProjects/>
        {/* <section id='section-other-projects'>
          Other Projects
        </section> */}
      </main>
    </>
  )
}

export default App
