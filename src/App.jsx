import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="Top_bar">
        <h2 id="logo">E</h2>
        <h2 id="Topic">Exercise For Good health</h2>
        <h3 id="about"><a href="/about-us">About-us</a></h3>
        <h3 id="sup"><a href="/support">Support</a></h3>
        <h3 id="log"><a href="/login">Login</a></h3>
        <h3 id="reg"><a href="/register">Register</a></h3>
      </div>

      <div className="Body_1">
        <h1 id="topic_1">Exercise For Good Health</h1>
        <img
          id="Picbo1"
          src="Picture/Pic_body1.webp"
          width="700"
          height="600"
          alt="Exercise for Good Health"
        />
      </div>

      <div className="space"></div>

      <div className="Body_2">
        <div id="topic_2">
          <h1>Exercise</h1>
        </div>
        <div id="content_2">
          <p>
            Exercise is physical activity that boosts health, fitness, and
            well-being. It includes planned, structured movements to improve
            aspects like endurance, strength, flexibility, and body composition.
          </p>
        </div>
        <Footer />
      </div>
    </div>
    
  )
}

export default App
