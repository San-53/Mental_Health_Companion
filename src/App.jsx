import Quiz from './components/Quiz';
import Explore from './components/ExploreSec.jsx';
import ChatBot from './components/ChatBot';




  function App() {
  return (
    // <Header/>
    <div className="App">
      <div id='header'> 
       <h4 className='header1'>Mental Health App</h4>
       <nav>
       <li>
            <select>
              <option value="option1">Chatbot</option>
              <option value="option2">Quiz App</option>
              <option value="option3">View More</option>
            </select>
          </li>
          </nav>
      </div>
      {/* <div id='quiz_css'> */}
       {/* <Quiz/> */}
       <div>
       <Explore/>
      {/* </div> */}
      <div>
      {/* <ChatBot/> */}
      </div>
    </div>
    </div>
  )
  }
export default App
