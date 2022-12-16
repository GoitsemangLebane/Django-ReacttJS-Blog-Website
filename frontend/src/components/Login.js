//import React, { useState, useContext } from 'react'
import { Link, /*useNavigate*/ } from 'react-router-dom';
//import { createContext } from "react";
//import { registerUser } from './authorisation';
//import SignUp from './SignUp';
//import Blog from './Blog';
//import { loginUser, setAxiosAuthToken, setToken, getCurrentUser, unsetCurrentUser } from './authorisation';

function Login() {

    //const [username, setUserName] = useState();
    //const [password, setPassword] = useState();
	//const UserContext = createContext(null);
	
    //const {isAuth, setisAuth} = ("  ");/*useContext(UserContext);*/
	
    
    /*let navigate = useNavigate();
	const handleSubmit = (e)=> {
       e.preventDefault();
       loginUser(username, password)
        .then(response =>{
            const auth_token = response;
            setAxiosAuthToken(auth_token);
            setToken(auth_token);
            getCurrentUser();
            setisAuth(true);
            navigate("/");

        })
        .catch(error => {
            unsetCurrentUser();
            window.alert("Login Error " + error);
        });
    };*/

    return (
    <div className="container pt-5">
        <div className="card">
        <div className="card-content">
            <h3 className="title is-3">Log In</h3>
            <form onSubmit={' ' /*handleSubmit*/}>
            <div className="field">
            <p className="control has-icons-left">
                <input className="input" 
                type="text" 
                placeholder="Username"
                id="username"
                name="username"
                //onChange={e=>setUserName(e.target.value)}
                />
            <span className="icon is-small is-left">
                <i className="material-icons">person</i>
            </span>
            </p>
            </div>
            <div className="field">
            <p className="control has-icons-left">
                <input className="input" 
                type="password" 
                placeholder="Password" 
                id="password"
                name="password"
                //onChange={e=> setPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                <i className="material-icons">lock</i>
                </span>
            </p>
            </div>
            <div className="field">
            <p className="control">
                <button type="submit" className="button is-success">Login
                    <i className="material-icons right">send</i>
                </button>
            </p>
            <br></br>
            <p>
               Don't have an Account? <Link to="/SignUp"> Register </Link>
            </p>
            </div>
            </form>
        </div>
        </div>
    </div>
    )
}

export default Login