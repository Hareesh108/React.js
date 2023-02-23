import { Name, Age } from './Parent';

function GrandChild() {
  return (
    <>
      <Name.Consumer>
        {(name) => {
          return(
            <Age.Consumer>
            {(age) => {
              return (
                <h1>
                  {name} {age}
                </h1>
              );
            }}
          </Age.Consumer>
          )
        }}
      </Name.Consumer>
    </>
  );
}

export default GrandChild;
