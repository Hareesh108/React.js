const Pet = () => {
    return React.createElement('div',{},[
        React.createElement('h1',null,"Pet1"),
        React.createElement('h1',null,"Pet2"),
        React.createElement('h1',null,"Pet3")
    ])
}

const App = () =>{
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",null,"Adopt Me!!"),
            React.createElement(Pet)
        ]
    )
  };

  const container = document.getElementById("root")

  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));