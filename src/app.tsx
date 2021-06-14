import * as React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './HelloWorld';
import Message from './Message';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    <Message />
  </React.StrictMode>,
  document.getElementById('app')
);
