const Pet = (props) => {
    return React.createElement('div',{},[
        React.createElement('h1',{},props.animal),
        React.createElement('h1',{},props.name),
        React.createElement('h1',{},props.color),
    ])
}

const App = () =>{
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{},"Adopt Me!!"),
            React.createElement(Pet,{
                animal:"Bird",
                name:"Peacock",
                color:"Black"
            }),
            
            React.createElement(Pet,{
                animal:"Bird",
                name:"Parrot",
                color:"Green"
            }),
        ]
    )
  };

  const container = document.getElementById("root")

  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));