
import React, { useState } from "react";
import { doSignInUser } from "../context/slice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SignInPage = (props) => {

    // this is on the component level and not the app level because it is only needed when the user is actively signing in
    const [userName, setUserName] = useState(""); // state set for username
    const [password, setPassword] = useState(""); 

    const dispatch = useDispatch();

    const history = useHistory();
  
    const handleSubmitClick = () =>{ 
        dispatch(doSignInUser({userName, password}))
        history.push(`./UserPage`);
    }

    // to display the sign-in page
    return (
        <div className="App">
        <header className="App-header">
            <p>Username:</p>
            <input type="text" id="username_input" value={userName} onChange={(event) => setUserName(event.target.value)}></input>
            <p>Password:</p>
            <input type="password" id="password_input" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <p>Click button to sign in:</p>
            <button id="sign_in_btn" onClick={handleSubmitClick}>Sign In</button>
            {/* if onClick={handleSubmitClick()} called with parentheses, the JS runs as soon as line is hit, otherwise needs to be passed in with arrow funtion  */}
        </header>
        </div>
    ); 
}

export default SignInPage;