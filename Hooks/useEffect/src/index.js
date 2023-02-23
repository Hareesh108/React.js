import React from "react";
// old way import
// import ReactDom from 'react-dom';

// New way import
import ReactDOM from 'react-dom/client';
import App from './App';

// Old way
// ReactDom.render(
//     <React.Fragment>
//         <App/>
//     </React.Fragment>,
//     document.getElementById('root')
// )

// New Way
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
