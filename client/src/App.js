// import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Signup from "./pages/Signup";


class App extends Component {
  render() {
    return(
      <div className="App">
        <Admin/>
        <Home/>
        <Login/>
        <Navbar/>
        <Signup/>
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


