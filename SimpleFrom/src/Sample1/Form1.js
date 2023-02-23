

function Form1() {
    const SubmitForm = (obj) => {
      obj.preventDefault();
      const name = document.getElementById('name');
      const surname = document.getElementById('surname');
      const password = document.getElementById('password');
      // const conform_password = document.getElementById('conform_password');
  
      if (name.value.trim() === '' || surname.value.trim() === '') {
        alert('Fill name and surname ');
        return false;
      }
      console.log(obj)
      return true;
    };
  
    return (
      <div className="form">
        <form onSubmit={SubmitForm} >
          <div className="box">
            <label>Name</label> <br />
            <input id="name" type="text" />
          </div>
  
          <div className="box">
            <label>Surname</label> <br />
            <input id="surname" type="text" />
          </div>
          <div className="box">
            <label>Email</label> <br />
            <input type="email" name="" id="email" />
          </div>
          <div className="box">
            <label htmlFor="conform_password">Password</label> <br />
            <input type="password" name="" id="password" />
          </div>
  
          {/* <div className="box">
            <label>Conform Password</label> <br />
            <input type="password" name="" id="conform_password" />
          </div> */}
          <br />
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Form1;