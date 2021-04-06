import React from 'react'
import MainComponent from './Components/MainComponent'
import { BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component{

  render(){
    
    return(

      <Router>

        <MainComponent />

      </Router>

    )
  }
}

export default App;