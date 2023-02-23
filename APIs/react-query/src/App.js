import { useParams } from 'react-router-dom';

export default function App() {
  let { userId } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// const Home = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>
//     <Route path={`${match.path}/:topicId`} component={Topic} />
//     <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
//   </div>
// );
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );
// const App = () => (
//   <Router >
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route  path="/about" element={<About/>} />
//       <Route path="/topics" element={<Topics/>} />
//       </Routes>
//     </div>
//   </Router>
// );

// export default App;


// import React from 'react';
// import { StaticRouter, Route } from 'react-router-dom';

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// export default function App(props) {
//   return (
//     <StaticRouter location={props.location} context={props.context}>
//       <Route exact path="/" element={<Home/>} />
//       <Route path="/about" element={<About/>} />
//     </StaticRouter>
//   );
// }



// import React from 'react';
// import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// export default function App() {
//   return (
//     <MemoryRouter>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route path="/about" element={<About/>} />
//       </Routes>
//     </MemoryRouter>
//   );
// }


// import React from 'react';
// import { Router,Routes, Route, Link, HashRouter } from 'react-router';

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function App() {
//   return (
//     <Router history={HashRouter}>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route path="/about" element={<About/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { Router, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// export default function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route path="/about" element={<About/>} />
//       </Routes>
//     </Router>
//   );
// }


