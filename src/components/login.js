import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useFormik } from 'formik';

import axios from 'axios';
import * as React from 'react'
export default function Login() {
    const history = useHistory();
    const [id, setId] = useState(0);
    const [status, setStatus] = useState(-2);
    const getStatus = () => {
        return axios.get(`http://localhost:8000/api/students/login/${id}`).then(res => res.data)
    }
    const checkStatus = () => {
        getStatus().then(s => {
            setStatus(s)
            console.log(status);
            if (s === 0)
                history.push(`/studentpermit/${id}`);
            else if (s === 1)
                history.push(`/payment/${id}`);
            else if (s === 2)
                history.push(`/completetest/${id}`);
            else if (s === -1)
                history.push(`/errorpage/${id}`)
        });
    }

 
    return (
            <div >
                <br />
                <br />
                <h1> שלום וברכה לאתר להוצאת אשורי לימודים</h1>
                <br />
                <input type="number" onChange={e => setId(Number(e.target.value))} />
                :הכנס מס' ת"ז <br />
                <br />
                <br /> <button onClick={checkStatus}> אשור </button>
                <div id="wrapper">

    <form name="login-form" class="login-form" action="" method="post">
	
		<div class="header">
		<h1>Login</h1>
		</div>
	
		<div class="content">
		<input name="username" type="text" class="input username" placeholder="Username" />
		<div class="user-icon"></div>
		<input name="password" type="password" class="input password" placeholder="Password" />
		<div class="pass-icon"></div>		
		</div>

		<div class="footer">
		<input type="submit" name="submit" value="Login" class="button" />
		</div>
	<span>For more Visit the author <a target="_blank" href="http://www.facebook.com/besnik.hetemii">Besnik</a></span>
	</form>

</div>
<div class="gradient"></div>
            </div>

    );
}
