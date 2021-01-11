import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div class="jumbotron jumbotron-fluid">
        <div className = 'container'>
            <div class="jumbotron mt-5">
                <h1 class="display-4">Hi! I am an Auth System</h1>
                <p class="lead">This is a production level authentication system with great features</p>
                <hr class="my-4"/>
                <p>Feel free to try these features out by logging in. I made this to learn about authentication and JWT</p>
                <p class="lead">
                    <Link class="btn btn-primary btn-lg" to='/login' role="button">Login</Link>
                </p>
            </div>
        </div>
    </div>
    
)

export default Home

