// import logo from './logo.svg';
// import React, {Component} from 'react'
import logo from './zion.png'
import './App.css';
import NavBar from './components/Navbar/navbar'
import { Component } from 'react'


class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <NavBar />
        <p>
  
        <img className="mainLogo" src={logo} alt="Zion Ponderosa Logo" srcset="">
  
        </img>
        </p>
      </header>
          
          <p className="header container">
           Hello World
          </p>
          
  
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//     <header>
//       <p>

//       <img className="mainLogo" src={logo} alt="Zion Ponderosa Logo" srcset="">

//       </img>
//       </p>
//     </header>
        
//         <p className="header container">
//          Hello World
//         </p>
        

//     </div>
//   );
// }

export default App;
