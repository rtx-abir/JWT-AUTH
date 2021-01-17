import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth'

const Activate = ({ verify, match }) => {

    const [verified, setVerified] = useState(false)

    const verify_acc = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify( uid, token);
        setVerified(true);
    };

    if(verified){
        return <Redirect to='/' />
    }

    return(
        <div className = 'container mt-5'>
            <div className = 'd-flex flex-column justify-content-center align-items-center'>
                <h1> Verify your account:</h1>
                <button
                    onClick = {verify_acc}
                    type = 'button'
                    className = 'btn btn-primary'
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);
