import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth'


const NavBar = ({ logout, isAuthenticated }) => {
    const guestRoute = () =>(
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
        </Fragment>
    );
    const authRoute = () => (
        <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logout}>Logout</a>
        </li>
    );

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-fade fixed-top">
            <Link className="navbar-brand" to="/">Auth App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                    </li>
                    { isAuthenticated ? authRoute() : guestRoute()}
                </ul>
            </div>
        </nav>
    );   
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(NavBar);

