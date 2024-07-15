import Hero from './sections/hero/Hero'
import Projects from './sections/projects/Projects'
import Skills from './sections/skills/Skills'

function App() {
  return (
    <div className='flex flex-col gap-12'>
      <Hero />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
