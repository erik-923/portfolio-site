import './App.css'
import Header from'./components/header.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';

function App() {

  return (
    <div>
      <Header />
      <div className='scroll-view'>
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  )
}

export default App
