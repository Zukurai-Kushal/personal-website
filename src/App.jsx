import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import WebDevProjects from './components/WebDevProjects'
import OtherProjects from './components/OtherProjects'

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
        <OtherProjects/>
      </main>
    </>
  )
}

export default App
