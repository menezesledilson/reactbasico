//import módulos
import React from 'react';
import ReactDom from 'react-dom';

//Sem JSX
// const elemento = React.createElement('h1',{},'Sem JSX');
// ReactDOM.render(elemento, document.getElementById('root'));

//Com JSX
ReactDom.render(<h1>Com JSX</h1>,document.getElementById('root'));