
function GrandChild({name,age,setName}) {

    return(
        <div>
            <h1>My name is {name} {age}</h1>
            <button onClick={() => setName("Harry")} >setNameFromGrandChild</button>
        </div>
    )
}

export default GrandChild;