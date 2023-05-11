import React, { useState } from 'react';
import Explore from './components/ExploreSec.jsx';
import logo from './looo1.png';

function App() {
  const [displayComponent, setDisplayComponent] = useState("explore");

  function handleSelectChange(event) {
    setDisplayComponent(event.target.value);
  }

  function renderSelectedComponent() {
    switch (displayComponent) {
      case "chatbot":
        window.location.href = "https://www.google.com";
    return null;
    case "ex":
      window.location.href = "https://www.nimh.nih.gov/health/topics/suicide-prevention";
      return null;
      case "ex1":
        window.location.href = "https://sunny-blini-3f4aeb.netlify.app/";
        return null;
        case "ex2":
          window.location.href = "https://www.thelivelovelaughfoundation.org/helpline";
          return null;
      default:
        return <Explore />;
    }
  }

  return (
    <div className="App">
      <div id="header">
      <img className='logoImg' src={logo} />
        <h4 className="header1">Mental Health Companion</h4>
        <nav>
          <li>
            <select className='options' value={displayComponent} onChange={handleSelectChange}> 
              <option className='options'>More</option>
              {/* <option className='option' value="ex2">Helpline Number</option> */}
              <option style={{ height: '50px', width: '150px' }} value="ex2">Helpline Number</option>
              <option className='option' value="ex">Suicidal Helpline Number</option>
              <option className='option' value="ex1">About us</option>
            </select>
          </li>
        </nav>
      </div>
      <div>{renderSelectedComponent()}</div>
    </div>
  );
}

export default App;
