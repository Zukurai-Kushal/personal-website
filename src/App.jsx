import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        About Me
      </header>
      <main>
        <section>
          Web Dev Projects
        </section>
        <section>
          Other Projects
        </section>
      </main>
    </>
  )
}

export default App
