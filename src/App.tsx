import Ad from './components/Ad'
import Latest from './components/Latest'
import Technology from './components/Technology'
import Hero from './components/hero'
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Travel from './components/travel/Travel'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Ad />
      <Hero />
      <Travel />
      <Ad />
      <Technology />
      <Ad />
      <Latest/>
    </>
  )
}

export default App
