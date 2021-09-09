import React,{useState} from 'react'
import './login.css'
function Index() {

    const [click,setClick] = useState("Unsuccessful Login");

    const clickHandler = () =>{
        alert(click)
    }

    const clickHandlerrr = () => {
        setClick("Succesful Login")
        alert(click)
    }

    return (
        <div>
            UserName<input type="text"/>
            Password<input type="text"/>
            <button onClick={clickHandler} >Log In</button>
            <button onClick={clickHandlerrr} >Log Innn</button>
        </div>
    )
}

export default Index
