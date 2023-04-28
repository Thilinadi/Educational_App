// import logo from './logo.svg';
import './App.css';
import './EmailForm.js';
import EmailForm from './EmailForm.js';
import Location from './CourseContent.js';
import {BrowserRouter,NavLink, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/" className={"nav-link"}>FeedBack</NavLink>
          {/* <NavLink to="/payment" className={"nav-link"}>Payment</NavLink> */}
          <NavLink to="/location" className={"nav-link"}>Course Content</NavLink>
        </nav>

      </header>

      <main>
        <Routes>
          <Route path="/" element={<EmailForm/>}></Route>
          <Route path="/location" element={<Location/>}></Route>

        </Routes>
      </main>
      </BrowserRouter>
      {/* <Nav */}
      {/* <h1>hello</h1> */}
    {/* <EmailForm /> */}
    {/* <EmailForm/> */}
  </div>
  );
}

export default App;
