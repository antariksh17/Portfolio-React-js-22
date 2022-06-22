
import './App.css';
import {useState} from 'react';

function App() {

  const [active, setActive] = useState(false)

  const addClass =() => {
    console.log('click')
    setActive(prev=> !prev)
  }
  return (
    <div className="App">
      <div id="navbar">

        <div id="brand">
          <a href="_blank" >antariksh</a>

        </div>
        <div className="toggle-button" onClick={addClass}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav id="nav-list">
            <ul id="nav-ul">
              <li className={`nav-li ${active?'active': ''}`}>
                Experience
              </li>
              <li className={`nav-li ${active?'active': ''}`}>
                Projects
              </li>
              <li className={`nav-li ${active?'active': ''}`}>
                Blogs
              </li>
              <li className={`nav-li ${active?'active': ''}`}>
                Open Source
              </li>
              <li className={`nav-li ${active?'active': ''}`}>
                Community
              </li>
              <li className={`nav-li ${active?'active': ''}`}>
                Resume ↓
              </li>
            </ul>
        </nav>
      </div>
      <section id="header">

          <h2 id="headTitle">Full Stack Web Development</h2>
          <h2 id="headTitle">Data Engineering</h2>
          <h2 id="headTitle">User Experience</h2>
          <h2 id="headTitle">Product Management</h2>

      </section>
      <div>
        <hr/>
      </div>
      <section className='skills'>
      <div id="skills-head">
        Skills
      </div>

      </section>


    </div>
  );
}

export default App;
