import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth'

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);

    const [formData, setformData] = useState({
        email: ''
    });

    const { email} = formData

    const onChange = e => setformData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if(requestSent){
        return <Redirect to='/' />
    }

    return(
        <div className = 'container mt-5'>
            <h1>Request Password Reset</h1>
            <p> Enter the email for your account</p>
            <form onSubmit = {e => onSubmit(e)}>
                <div className = 'form-group'>
                    <input
                        className = 'form-control'
                        type = 'email'
                        placeholder = 'Email'
                        name = 'email'
                        value = {email}
                        onChange = {e => onChange(e)}
                        required
                    />
                </div>
                <button className = 'btn btn-primary' type = 'submit'>Request Password Reset</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);
