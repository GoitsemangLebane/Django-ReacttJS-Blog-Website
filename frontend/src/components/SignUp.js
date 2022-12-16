//import React, { useState, useContext } from 'react'
import { Link, /*useNavigate*/ } from 'react-router-dom';
//import Login from './Login';
//import SignUp from './SignUp';
//import Blog from './Blog';
//import { createContext } from "react";
//import { registerUser } from './authorisation';
//import { UserContext } from '../utils/UserContext'


function Register() {

    //const [username, setUserName] = useState();
    //const [email, setEmail] = useState();
    //const [password, setPassword] = useState();
    //const [password_two, setPassword_two] = useState();
    
    //const UserContext = createContext(null);
    
    //const {isAuth, setisAuth} = useContext(UserContext);

    /*let navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (password !== password_two){
            window.alert("Error passwords do not match");
        } else {
            const registered = registerUser(username, email, password);
            if (registered == true){
                setisAuth(true);
                navigate("/");
            } else {
                navigate("/register");
            }
        }
    };*/

    return (
        <div className="container pt-5">
        <div className="card">
        <div className="card-content">
            <h3 className="title is-3">Register to Our Blog</h3>
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
                type="email" 
                placeholder="Email"
                id="email"
                name="email"
                //onChange={e=>setEmail(e.target.value)}
                />
            <span className="icon is-small is-left">
                <i className="material-icons">email</i>
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
                //onChange={e=>setPassword(e.target.value)}
                />
            <span className="icon is-small is-left">
                <i className="material-icons">lock</i>
            </span>
            </p>
            </div>
            <div className="field">
            <p className="control has-icons-left">
                <input className="input" 
                type="password" 
                placeholder="Confirm Password"
                id="password_two"
                name="password_two"
                //onChange={e=>setPassword_two(e.target.value)}
                />
            <span className="icon is-small is-left">
                <i className="material-icons">lock</i>
            </span>
            </p>
            </div>
            <div class="field">
            <p class="control">
                <button href='submit' type="submit" class="button is-success">Register
                    <i className="material-icons right">send</i>
                </button>
            </p>
            <br></br>
            <p>
               Already have an account ? <Link to="/Login">Log In</Link> 
            </p>
            </div>
            </form>
        </div>
        </div>
    </div>
    )
}

export default Register