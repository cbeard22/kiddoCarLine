// import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";


class App extends Component {
  render() {
    return(
      <div className="App">
        <Admin studentData={studentData}/>
        <Home studentData={studentData}/>
        <Login studentData={studentData}/>
        <Navbar studentData={studentData}/>
        <Signup studentData={studentData}/>
      </div>
    )
  }
}



export default App;







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


