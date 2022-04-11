import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth'


const auth = getAuth(app)

const Login = () => {

    // const { signInWithGoogle } = useFirebase()
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Please Login</h2>

            <div>
                <button onClick={() => signInWithGoogle()} >Google Sign In</button>
            </div>
            <br />
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;