import React, { useState } from 'react';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import Register from '../components/Register';
import '../css/Switch.css';

function Entry() {

    const [screen, setScreen] = useState<'LOGIN' | 'REGISTER'>('LOGIN');

    const screenDisplay = screen === 'LOGIN' ? <Login/> : <Register/>;

    return (
        <div style={{color: "white"}}>
            <PageTitle />
            <div style={{display: "flex", justifyContent:"center", marginBottom: "20px", marginTop: "10px", marginLeft: "15px"}}>
                <h3 style={{marginRight: "10px"}}>Login</h3>
                <label className="switch">
                <input type="checkbox" onClick={() => {
                    screen === 'LOGIN' ? setScreen('REGISTER') : setScreen('LOGIN');
                }}/>
                <span className="slider round"></span>
                </label>  
                <h3 style={{margin: "0", marginLeft: "10px"}}>Register</h3>
            </div>
            {screenDisplay}
        </div>
    )
}

export default Entry
