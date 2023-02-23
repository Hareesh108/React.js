import React, {useRef, useState} from "react"

const DOMAccess = () => {

    const header = useRef(null);

    const change = () => {
        header.current.style.backgroundColor = "red";
        header.current.style.padding='10px';
        header.current.style.border = "20px solid"
    }

    return(
        <div>
            <h2 ref={header} >My name is Hareesh!!</h2>
            <button onClick={change} >Decoration</button>
        </div>
    )
}

export default DOMAccess;