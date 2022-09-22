import React from 'react';

import Home from '../views/home'

import ImportarArquivos from '../views/importarArquivos'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'



class App extends React.Component {

  render(){
    return(
        <div className="container">    
            <ImportarArquivos />
        </div>
    )
  }
}

export default App