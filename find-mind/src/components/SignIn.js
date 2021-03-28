import React, {Component} from 'react'
import '../stylesheets/SignIn.css'
import logo from '../assets/logo3.png'
import { Link } from 'react-router-dom'

export default class SignIn extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="left">
                        <img src={logo} />
                        <h1>Tasks Board</h1><br /><br /><br /><br />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas aliquet aliquam neque eu commodo. Nullam ornare 
                        eleifend pretium. 
                        </p>
                    </div>
                    <div className="right">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" /><br />
                        <input type="checkbox" /> Remember me<br />
                        <a href='/'>Forgot Password?</a><br />
                        <Link to="/dashboard" className="button">Log In</Link>
                        <Link to="/dashboard" className="button">Sign Up</Link>
                    </div>
                </div>
            </div>
        )
    }
}