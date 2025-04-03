import React, {useState} from "react";
import './loginPopup.css';

const loginPopup = ({setShowLogin}) => {


    const [currentstate, setCurrentState] = useState("Login");
    return (
        <div className={"loginPopup"} id={"loginPopup"}>

            <form className={"loginPopup_form"}>
                <div className={"loginPopup_title"}>
                    <h2>{currentstate}</h2>
                   <img  src={"./cross_icon.png"} onClick={() => setShowLogin(false)}  alt={""}/>
                </div>
                <div className={"loginPopup_input"}>
                    {currentstate === "Login" ? <></> :
                        <input type={"text"} placeholder="Enter your name" required/>}
                    <input type={"text"} placeholder="Enter your email" required/>
                    <input type={"password"} placeholder="Enter your password" required/>
                </div>
                <button style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "5px"
                }}>{currentstate === "Sign Up" ? "create account" : "Login"}</button>
                <div className={"login_popup_condition"}>
                    <input type={"checkbox"} required/>
                    <p>By continuing i agree to the terms of use & privacy policy </p>
                </div>

                {currentstate === "Login" ?
                    <p> Create a new account ?
                        <span onClick={() => setCurrentState("Sign Up")}><u
                            style={{cursor: "pointer", fontWeight: "bolder"}}>Click here</u></span></p> :
                    <p>Already have an account?
                        <span onClick={() => setCurrentState("Login")}><u
                            style={{cursor: "pointer", fontWeight: "bolder"}}>Login here</u></span></p>}

            </form>
        </div>
    )
}
export default loginPopup;