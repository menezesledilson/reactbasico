//import módulos
import React from 'react';
import ReactDom from 'react-dom';

//Componente
class MeuComponente extends React.Component{
   render(){
    return<h1>MeuComponente</h1>;
   }
}

//Render
ReactDom.render(<MeuComponente/>,document.getElementById('root'));